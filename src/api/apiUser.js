import React from "react";

import axios from "axios";

export const url = 'http://147.45.237.114:8080';

export const CreateUser = async (body) => {
    debugger;
    const response = await axios({method: 'post', url: `${url}/registraition`, body: {
        "email": body.email,
        "password": body.password,
        "role": body.role
    }});
    const data = response.data;

    console.log(data)

    return response ? {
        Email: data.email,
        Password: data.password,
        Role: data.role,
    } : null;
}