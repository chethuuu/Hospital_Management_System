import React from 'react'
import { NavLink } from 'react-router-dom'

function RegPatients() {
    return (
        <div>
            <div className="container shadow my-5"> <br />
                <h1 className="display-6 fw-bolder mb-5 text-center"> Patient Registration</h1>
                <div className='row'>
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form order-2">
                        img
                    </div>

                    <div className="col-md-6 p-5">
                        <form>
                            <div className='row py-2'>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">Patient ID</label>
                                    <input type='text' class="form-control" name='PID' value='' placeholder='Enter Patient ID' onChange={(e) => onChangeData(e)} />
                                </div>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">Patient Name</label>
                                    <input type='password' class="form-control" name='Pname' value='' placeholder='Enter Patient Name' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div>

                            <div className='row py-2'>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">Registration Date</label>
                                    <input type="datetime-local" id="birthdaytime" name="regdate" class="form-control" value='' placeholder='Enter Registration Date' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-6">
                                    <label for="text" class="form-label">E-mail Address</label>
                                    <input type='text' class="form-control" name='email' value='' placeholder='Enter E-mail Address' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div>

                            <div className='row py-2'>
                                <div class="col-md-4">
                                    <label for="text" class="form-label">Phone Number</label>
                                    <input type='password' class="form-control" name='number' value='' placeholder='Enter Phone Number' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-4">
                                    <label for="text" class="form-label"> Birthday </label>
                                    <input type="datetime-local" id="birthdaytime"  class="form-control" name='bday' value='' placeholder='Enter Patient Birthday' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-4">
                                    <label for="text" class="form-label">Age</label>
                                    <input type='number' class="form-control" name='age' value='' placeholder='Enter Age' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div>

                            <div className='row py-2'>
                                <div class="col-md-4">
                                    <label for="text" class="form-label"> Blood Group </label>
                                    <input type='text' class="form-control" name='blood' value='' placeholder='Enter Blood Group' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-4">
                                    <label for="text" class="form-label"> Password </label>
                                    <input type='password' class="form-control" name='city' value='' placeholder='Enter Password' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="col-md-4">
                                    <label for="text" class="form-label">User Role</label>
                                    <input type='number' class="form-control" name='userRole' value='' placeholder='Enter Age' onChange={(e) => onChangeData(e)} required />
                                </div>
                                
                            </div>

                            <div className='row py-2'>
                                <div class="col-md-12">
                                    <label for="text" class="form-label">Address</label>
                                    <textarea type='password' class="form-control" name='address' value='' placeholder='Enter Address' onChange={(e) => onChangeData(e)} required />
                                </div>
                            </div> <br/>

                            <button type="submit" class="btn btn-primary w-100 rounded-pill" onClick={(e) => RegisterUser(e)}>Register Patient</button>
                        </form>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default RegPatients