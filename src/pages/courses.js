import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../api/apiCourse';
import { Navigate, useNavigate } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCourses();
                setCourses(data)
            } catch (error) {
                console.error('Error fetch courses')
            }
        }

        fetchData();
    }, [])

    const getCourse = (id) => {
        
        navigate(`/course/${id}`)
    }

    return (
        <div className='divGlav'>
            <h2 className='center'>Курсы</h2>


            <div className='allCourses'>
                {courses.map((value, key) => {
                    return (
                        <div className='divCourse' onClick={() => getCourse(value.id)} key={key}>
                            <p className='title'><b>Title:</b> {value.title}</p>
                            <hr/>
                            <p className='text'><b>Description:</b> {value.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Courses