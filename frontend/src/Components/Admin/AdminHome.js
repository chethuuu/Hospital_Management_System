import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminHome() {
    return (
        <div>
            <h1> Admin Home</h1> <br/><br/>
            <NavLink to='/reg_patient'>
                <button className='btn btn-danger'>Register Patients</button>
            </NavLink> <br/>

            <NavLink to='/allstaff'>
                <button className='btn btn-warning'>All Staff</button>
            </NavLink> <br/>

            <NavLink to='/allpatient'>
                <button className='btn btn-success'>All Patient</button>
            </NavLink>


        </div>
    )
}

export default AdminHome