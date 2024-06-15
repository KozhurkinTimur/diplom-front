import React, { useState } from 'react';
import { CreateUser } from '../api/apiUser';
import { useNavigate } from 'react-router-dom';
import store from '../store';

const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const createUser = () => {

        debugger

        if (document.getElementById('email') !== null) {
            return
        }

        const data = {
            email: email,
            password: password,
            role: store.getIsAdmin,
        }   

        console.log(data)
            
        const resp = CreateUser(data)

        if (resp == null) {
            alert("Что-то неправильно")            
            return
        }

        if (!store.getIsAuth) {
            store.setIsAuth(true)
        }

        if (resp.Role !== store.getIsAdmin) {
            store.setIsAdmin(resp.Role)
        }

        navigate('/courses')
    }

    const handleChangeMail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className='wrapper'>
            <form action='' onSubmit={createUser}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='email' value={email} onChange={handleChangeMail} placeholder='Email' required/>
                </div>
                
                <div className='input-box'>
                    <input type='password' value={password} onChange={handleChangePass} placeholder='Password' required/>
                </div>

                <button className='btn'>Login</button>

                <div className='register-link'>
                    <p>Don`t have an account? <a href='#'>Register</a></p>
                </div>
            </form>

        </div>
    )
}

export default Auth