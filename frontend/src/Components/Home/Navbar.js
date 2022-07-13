import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const [userRole, setuserRole] = useState(null);

    useEffect(() => {
        setuserRole(localStorage.getItem("userRole"));
    }, [])

    const LogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/")
        window.location.reload();
    }

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light shadow">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/service">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/"> Hospital </Link>
                                </li>
                                <li class="nav-item">
                                    <a href="/admin" style={{ display: userRole === "admin" ? "flex" : "none", float: "left", marginLeft: "5px" }}><button className="btn btn-outline-primary ms-2 px-4 rounded-pill">Admin </button></a>
                                    <a href="/student" style={{ display: userRole === "Student" ? "flex" : "none", float: "left", marginLeft: "5px" }}><button className="btn btn-outline-primary ms-2 px-4 rounded-pill">Student </button></a>
                                </li>
                            </ul>

                            <li class="nav-item">
                                <Link className="btn btn-outline-primary ms-2 px-4 rounded-pill" to="/login">
                                    Login <i className="fa fa-sign-in me-2" />
                                </Link>
                            </li>

                            <NavLink to="/register">
                                <button className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                    Register <i className="fa fa-user-plus me-2" />
                                </button>
                            </NavLink>
                            <li>
                                <a href="/current-user" style={{ display: userRole !== null ? "flex" : "none", float: "left", marginLeft: "5px" }}><button className="btn btn-outline-primary ms-2 px-4 rounded-pill">Profile</button></a>
                            </li>
                            <li>
                                <button className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                                    style={{ display: userRole !== null ? "flex" : "none", float: "left" }}
                                    onClick={(e) => LogOut(e)}>Log Out <i className="fa fa-sign-out me-2" />
                                </button>
                            </li>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar