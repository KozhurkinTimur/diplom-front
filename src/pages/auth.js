import React, { useState } from 'react';
import { CreateUser } from '../api/apiUser';
import { useNavigate } from 'react-router-dom';
import store from '../store';

const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const createUser = () => {
        console.log("начало функции")

       // debugger

        // if (document.getElementById('email') !== null) {
        //     return
        // }

        const data = {
            email: email,
            password: password,
            role: store.getIsAdmin,
        }   

        console.log(data)
            
        const resp = CreateUser(data)
        console.log("алллоооооо")

        if (resp == null) {
            console.log("умер")
            alert("Что-то неправильно")            
            return
        }

        console.log("начало функции 2")


        // if (!store.getIsAuth) {
            store.setIsAuth(true)
        // }

        if (resp.Role !== store.getIsAdmin) {
            store.setIsAdmin(resp.Role)
        }
        console.log("начало функции 3")

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