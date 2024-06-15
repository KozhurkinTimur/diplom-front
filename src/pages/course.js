import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getByIdCourse } from '../api/apiCourse';

const Course = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [youtube, setYoutube] = useState('')
    let {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getByIdCourse(id);
                setTitle(data.title)
                setText(data.text)
                setYoutube(data.youtube)
            } catch (error) {
                console.error('Error fetch course')
            }
        }

        fetchData();
    }, [])


    return (
        <div className="divGlav">
            <h1 className='center'>Курс: {title}</h1>
            <p className='font-size-30'><b className='font-size-40'>Description: </b>{text}</p>
            <p className='font-size-30'>Youtube: {youtube}</p>
        </div>
    )
}

export default Course