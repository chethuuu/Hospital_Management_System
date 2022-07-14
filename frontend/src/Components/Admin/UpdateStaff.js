import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router";

const UpdateStaff = () => {
    const [staff, setStaff] = useState({
        name: "", email: ""
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

    function sendData(e) {
        e.preventDefault();
        const updateStaff = staff;
        axios.put(`http://localhost:5000/hospital/${id}`, updateStaff)
            .then(() => {
                alert('Updated Successfully')
            })
            .catch((err) => {
                alert(err)
            })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setStaff((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }


    return (
        <div>
            <form onSubmit={sendData}>
                <input type='text' name="name" onChange={handleChange} value={staff.name} placeholder='name' />
                <input type='text' name="email" onChange={handleChange} value={staff.email} placeholder='email' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UpdateStaff