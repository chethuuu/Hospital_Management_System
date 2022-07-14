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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>email</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staff && staff.map((staff, id) => {
                            return (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.userRole}</td>
                                    <th><a
                                        className="btn btn-warning"
                                        href={`/updatestaff/${staff._id}`} >
                                        &nbsp;&nbsp; Update
                                    </a></th>
                                    <th><button onClick={() => {
                                        deleteStaff(staff._id);
                                    }}> Delete </button>
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