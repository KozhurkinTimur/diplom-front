import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createCourse, deleteCourse, getAllCourses, updateCourse } from '../api/apiCourse';

const Admin = () => {
    const [courses, setCourses] = useState([])
 
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

    const deleteC = (id) => deleteCourse(id) ? alert(`Course id = ${id} успешно удален.`) : alert('Что-то пошло не так');
    

    const updateC = (id) => {
        const data = {
            id: id,
            title: document.getElementById("title_"+id).value,
            text: document.getElementById("text_"+id).value,
            youtube: document.getElementById("youtube_"+id).value,
        }

        updateCourse(data) ? alert(`Course id = ${id} успешно изменен`) : alert("Что-то пошло не так");
    }

    const create = () => {
        const data = {
            title: document.getElementById("title_create").value,
            text: document.getElementById("text_create").value,
            youtube: document.getElementById("youtube_create").value,
        }

        createCourse(data) ? alert(`Course успешно создан`) : alert("Что-то пошло не так");
    }

    return (
        <div className='divGlav'>
            <h2 className='center'>Admin</h2>

            <hr className='mr-bot-20' />

            <div className='allCourses'>
            {courses.map((value, key) => {
                    return (
                        <div className='divCourse' key={key}>
                            <input className='title' id={"title_"+value.id} defaultValue={value.title}/>
                            <textarea className='text' id={"text_"+value.id}>{value.text}</textarea>
                            <input className='text' id={"youtube_"+value.id} defaultValue={value.youtube} />
                            <div className='d-flex space-between'>
                                <button className='butt_adm' onClick={() => updateC(value.id)}>Обновить</button>
                                <button className='butt_adm' onClick={() => deleteC(value.id)} >Удалить</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <hr className='mr-bot-20' />

            <h2 className='center'>Создай новый курс</h2>

            <div className='divCourse center' >
                <input className='title' type='text' id='title_create' />
                <textarea className='text' id='text_create'></textarea>
                <input className='text' type='text' id='youtube_create' />
                <button className='butt_adm' onClick={() => create()} >Создать</button>
            </div>
            
            <hr />

            <Link className='buttonAuth mr-top-20' to="/auth">
                Создай нового администратора
            </Link>

        </div>
    )
}

export default Admin