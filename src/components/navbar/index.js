import React from 'react';
import {Link } from 'react-router-dom';


import './navbar.css'

const NavBar = () =>{
    return(

        <div className='header-nav'>
            <Link to="/" className="nav-item nav-link logo" >
                <img src="images/logo-island.png" alt="logo-island"/>
            </Link>

            <div className="navbar-nav col-md-12">
                <Link
                    to="/"
                    className="nav-item nav-link"
                >
                    Головна</Link>
                <Link
                    to="/products"
                    className="nav-item nav-link"
                >
                    Продукти 1С
                </Link>
                <Link
                    to="/security"
                    className="nav-item nav-link"
                >
                    Системи безпеки
                </Link>
            </div>

        </div>

        )

};

export  default NavBar;
