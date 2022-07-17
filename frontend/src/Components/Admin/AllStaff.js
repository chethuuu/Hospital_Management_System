import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AllStaff = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const getStaff = async () => {
            const res = await axios.get("http://localhost:5000/hospital/getall");
            setStaff(res.data)
        }
        getStaff();
    }, []);

    function deleteStaff(_id) {
        axios
            .delete("http://localhost:5000/hospital/" + _id)
            .then((res) => {
                console.log(res.data);
                alert('Deleted Sucessfully');
            }).catch((err) => {
                alert(err);
            })
        setStaff(staff.filter((staff) => staff._id !== _id))
    }


    return (
        <div className="container shadow my-5">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th Scope="col">No:</th>
                        <th Scope="col">ID</th>
                        <th Scope="col">Name</th>
                        <th Scope="col">Registration Date</th>
                        <th Scope="col">E-mail</th>
                        <th Scope="col">Phone Number</th>
                        <th Scope="col">Age</th>
                        <th Scope="col">Blood Group</th>
                        <th Scope="col">User Role</th>
                        <th Scope="col">Address</th>
                        <th Scope="col">View</th>
                        <th Scope="col">Update</th>
                        <th Scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staff && staff.map((staff, id) => {
                            return (
                                <tr>
                                    <th scope="row">{id + 1}</th>
                                    <td>{staff.PID}</td>
                                    <td>{staff.Pname}</td>
                                    <td>{staff.regdate}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.number}</td>
                                    <td>{staff.age}</td>
                                    <td>{staff.blood}</td>
                                    <td>{staff.userRole}</td>
                                    <td>{staff.address}</td>
                                    <th><a
                                        className="btn btn-danger"
                                        href={`/viewstaff/${staff._id}`} >
                                        &nbsp;&nbsp;View&nbsp;&nbsp;
                                    </a></th>
                                    <th><a
                                        className="btn btn-warning"
                                        href={`/updatestaff/${staff._id}`} >
                                        &nbsp;&nbsp;Update&nbsp;&nbsp;
                                    </a></th>
                                    <th><button onClick={() => {
                                        deleteStaff(staff._id);
                                    }} className='btn btn-success'> &nbsp;&nbsp;Delete&nbsp;&nbsp; </button>
                                    </th>
                                </tr>
                            )
                        }
                        )

                    }

                </tbody>
            </table>
        </div>
    )
}

export default AllStaff