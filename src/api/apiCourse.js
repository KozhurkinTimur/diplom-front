import { url } from "./apiUser";
import axios from "axios";

export const getAllCourses = async () => {
    const response = await axios.post(`${url}/getCourses`);
    const data = response.data;

    return data
}

export const getByIdCourse = async (id) => {
    const response = await axios.post(`${url}/getCourse`, {id: id});
    const data = response.data;

    return data
}

export const createCourse = async (body) => {
    const response = await axios.post(`${url}/createCourse`, body);
    const data = response.data;

    return data
}

export const updateCourse = async (body) => {
    const response = await axios.post(`${url}/updateCourse`, body);
    const data = response.data;

    return data
}

export const deleteCourse = async (id) => {
    const response = await axios.post(`${url}/deleteCourse`, {id: id});
    const data = response.data;

    return data ? true : false;
}
