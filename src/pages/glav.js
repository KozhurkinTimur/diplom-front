import React from 'react';
import { Link } from 'react-router-dom';

const Glav = () => {
    return (
        <div className='divGlav'>
            <header className='d-flex flex-col'>
                <h1 className='center'>Добро пожаловать на сайт компании YourCompany!</h1>
                <p className='center'>Мы являемся лидерами в области разработки программного обеспечения и предоставляем широкий спектр услуг для наших клиентов.</p>
            </header>

            <section className='d-flex flex-col'>
                <h2 className='center'>О нас</h2>
                <p className='center'>Наша компания существует на рынке уже более 10 лет. Мы специализируемся на разработке веб-приложений, мобильных приложений и других IT-решений.</p>
            </section>
            
            <section className='d-flex flex-col'>
                <h2 className='center'>Наши услуги</h2>
                <ul className='center'>
                    <li>Разработка веб-приложений</li>
                    <li>Разработка мобильных приложений</li>
                    <li>UX/UI дизайн</li>
                    <li>Консалтинг по IT-вопросам</li>
                </ul>
            </section>
            
            <section className='d-flex flex-col'>
                <h2 className='center'>Наша команда</h2>
                <p className='center'>У нас работают только лучшие специалисты в области разработки и дизайна. Наша команда гордится своей работой и всегда готова к новым вызовам.</p>
            </section>
            
            <footer className='footGlav'>
                <p className='center'>Чтобы просмотреть наши курсы вы должны зарегистрироваться/авторизоваться.</p>
                <Link className='buttonAuth' to="/auth">
                    Auth/Reg
                </Link>
            </footer>
        </div>
    )
}

export default Glav