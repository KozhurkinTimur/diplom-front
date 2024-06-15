import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRouters, authRouters, publicRouters } from './routes'
import store from '../store';


const AppRouter = () => {

    return (
        <Routes>
            {publicRouters.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}

            {store.getIsAuth && authRouters.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}

            {store.getIsAdmin && adminRouters.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}
        </Routes>
    )
}

export default AppRouter