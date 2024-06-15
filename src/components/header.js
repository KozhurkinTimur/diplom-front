import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <b>
                    ГЛАВНАЯ
                </b>
            </Link>
            <Link to='/courses'>
                <b>
                    КУРСЫ
                </b>
            </Link>
            <Link to='/admin'>
                <b>
                    АДМИН
                </b>
            </Link>
        </div>
    )
}

export default Header