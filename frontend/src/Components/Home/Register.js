import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        userRole: ""
    });

    const { name, email, password, userRole } = data;

    const onChangeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const RegisterUser = async (e) => {
        e.preventDefault();
        let user = await axios.post("http://localhost:5000/hospital/register", data);
        console.log(user);
        if (user?.data?.acknowledged === true) {
            alert("Your Registration Success");
            navigate('/');
        }
        else {
            alert("Your Registration Failed");
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form">
                        <br />
                        <img src="https://thumbs.dreamstime.com/b/portrait-medical-doctor-posing-16974048.jpg"
                            alt="login form" class="img-fluid reg_img" />
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5 text-center"> User Registration</h1>
                        <form>
                            <div class="mb-3">
                                <label for="text" class="form-label">Name</label>
                                <input type='text' class="form-control" name='name' value={name} placeholder='Enter Your Name' onChange={(e) => onChangeData(e)} />
                            </div>
                            <div class="mb-3">
                                <label for="text" class="form-label">Email address</label>
                                <input type='email' class="form-control" name='email' value={email} placeholder='Enter your E-mail' onChange={(e) => onChangeData(e)} required />
                            </div>
                            <div class="mb-3">
                                <label for="text" class="form-label">Password</label>
                                <input type='password' class="form-control" name='password' value={password} placeholder='Enter Password' onChange={(e) => onChangeData(e)} required />
                            </div>
                            <div class="mb-3">
                                <label for="text" class="form-label">User Role</label>
                                <input type='text' class="form-control" name='userRole' value={userRole} placeholder='Enter your User Role' onChange={(e) => onChangeData(e)} required />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I Agree with all the terms & Conditions</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 rounded-pill" onClick={(e) => RegisterUser(e)}>Register User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register