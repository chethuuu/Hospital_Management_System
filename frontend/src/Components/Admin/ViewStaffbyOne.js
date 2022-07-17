import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';

const ViewStaffbyOne = () => {
    const [data, setStaff] = useState({
        PID: "",
        Pname: "",
        regdate: "",
        email: "",
        number: "",
        bday: "",
        age: "",
        blood: "",
        password: "",
        userRole: "",
        address: ""
    })

    const { id } = useParams();

    useEffect(() => {
        function getStaff() {
            axios
                .get(`http://localhost:5000/hospital/getid/${id}`)
                .then((res) => {
                    setStaff(res.data)
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
        getStaff();
    }, []);


    return (
        <div>
            <div className="container shadow my-5"> <br />
                <h1 className="display-6 fw-bolder mb-5 text-center"> {data.Pname}'s Profile </h1>
                <div className='row'>
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form order-2">
                        img
                    </div>

                    <div className="col-md-6 p-5">
                        <form>
                            <div className='row py-2'>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">User ID</label>
                                    <input type='text' class="form-control" name='PID' value={data.PID} placeholder='Enter User ID' onChange={(e) => onChangeData(e)} />
                                </div>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">User Name</label>
                                    <input type='text' class="form-control" name='Pname' value={data.Pname} placeholder='Enter User Name' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div>

                            <div className='row py-2'>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">Registration Date</label>
                                    <input type="datetime-local" id="birthdaytime" name="regdate" class="form-control" value={data.regdate} placeholder='Enter Registration Date' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">E-mail Address</label>
                                    <input type='text' class="form-control" name='email' value={data.email} placeholder='Enter E-mail Address' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div>

                            <div className='row py-2'>
                                <div class="col-md-4">
                                    <label for="text" class="form-label">Phone Number</label>
                                    <input type='text' class="form-control" name='number' value={data.number} placeholder='Enter Phone Number' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-5">
                                    <label for="text" class="form-label"> Birthday </label>
                                    <input type="datetime-local" id="birthdaytime" class="form-control" name='bday' value={data.bday} placeholder='Enter User Birthday' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-3">
                                    <label for="text" class="form-label">Age</label>
                                    <input type='number' class="form-control" name='age' value={data.age} placeholder='Enter Age' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div>

                            <div className='row py-2'>
                                <div class="col-md-4">
                                    <label for="text" class="form-label"> Blood Group </label>
                                    <input type='text' class="form-control" name='blood' value={data.blood} placeholder='Enter Blood Group' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-4">
                                    <label for="text" class="form-label"> Password </label>
                                    <input type='password' class="form-control" name='password' value={data.password} placeholder='Enter Password' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-4">
                                    <label for="text" class="form-label">User Role</label>
                                    <input type='text' class="form-control" name='userRole' value={data.userRole} placeholder='Enter User Role' onChange={(e) => onChangeData(e)} required />
                                </div>

                            </div>

                            <div className='row py-2'>
                                <div class="col-md-12">
                                    <label for="text" class="form-label">Address</label>
                                    <textarea type='password' class="form-control" name='address' value={data.address} placeholder='Enter Address' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div> <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStaffbyOne