import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
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
                            </ul>
                            <Link class="nav-link active navbar-brand mx-auto fw-bolder fs-2" to="/">

                            </Link>
                            <li><Link className="btn btn-outline-primary ms-2 px-4 rounded-pill" to="/login">Login <i className="fa fa-sign-in me-2" /> </Link></li>

                            <NavLink to="/register"> <button className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                Register <i className="fa fa-user-plus me-2" />
                            </button> </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar