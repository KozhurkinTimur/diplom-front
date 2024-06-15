import React from "react";

import axios from "axios";

export const url = 'http://147.45.237.114:8080';

export const CreateUser = async (body) => {
    //debugger;
    console.log("ууииииииии")
    const response = await axios({method: 'post', url: `${url}/registraition`, data: {
        "email": body.email,
        "password": body.password,
        "role": body.role
    }});
    const data = response.data;

    console.log(data)
    console.log("ааууууууууу")

    return response ? {
        Email: data.email,
        Password: data.password,
        Role: data.role,
    } : null;
}