import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminHome() {
    return (
        <div>
            <h1> Admin Home</h1>
            <NavLink to='/reg_patient'>
                <button>Register Patients</button>
            </NavLink>

            <NavLink to='/allstaff'>
                <button>All Staff</button>
            </NavLink>

            <NavLink to='/allpatient'>
                <button>All Patient</button>
            </NavLink>

            <div class="w3-sidebar w3-light-grey w3-bar-block">
                <h3 class="w3-bar-item">Menu</h3>
                <a href="#" class="w3-bar-item w3-button">Link 1</a>
                <a href="#" class="w3-bar-item w3-button">Link 2</a>
                <a href="#" class="w3-bar-item w3-button">Link 3</a>
            </div>

            
            <div>

                <div class="w3-container w3-teal">
                    <h1>My Page</h1>
                </div>


                    <div class="w3-container">
                        <h2>Sidebar Navigation Example</h2>
                        <p>The sidebar with is set with "style="width:25%".</p>
                        <p>The left margin of the page content is set to the same value.</p>
                    </div>

            </div>





        </div>
    )
}

export default AdminHome