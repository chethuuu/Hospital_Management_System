import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        passowrd: ""
    });

    const navigate = useNavigate();

    const { email, password } = data;

    const onChangeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const LoginUser = async (e) => {
        e.preventDefault();
        let user = await axios.post("http://localhost:5000/hospital/login", data);
        console.log(user);
        if (user?.data?.token) {
            alert("Login is Sucessfully");
            localStorage.setItem("token", user?.data?.token);
            localStorage.setItem("userRole", user?.data?.userRole);
            window.location.reload();
            navigate("/")
        }
        else {
            alert("Login is Failed");
            window.location.reload();
        }
    }

    return (
        <div>
            <div>
                <div className="container shadow my-5">
                    <div className="row">
                        <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form">
                            <br />
                            <img src="https://www.clipartkey.com/mpngs/m/104-1041606_female-doctor-png-picture-female-doctor-png.png"
                                alt="login form" class="img-fluid log_img" />
                        </div>
                        <div className="col-md-6 p-5">
                            <h1 className="display-6 fw-bolder mb-5 text-center"> LOGIN </h1>
                            <form>
                                <div class="mb-3">
                                    <label for="text" class="form-label">Email address</label>
                                    <input type='email' class="form-control" name='email' value={email} placeholder='Enter your E-mail' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="text" class="form-label">Password</label>
                                    <input type='password' class="form-control" name='password' value={password} placeholder='Enter Password' onChange={(e) => onChangeData(e)} required />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1"> Remember Me</label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 rounded-pill" onClick={(e) => LoginUser(e)}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login