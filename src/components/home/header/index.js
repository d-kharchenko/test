import './header.css'

import React from 'react';
import NavBar from '../../../components/navbar';
import LogIn from '../../../components/logIn';
const Header = () =>{
    return(
        <div className="header-wrap">
            <div className="container">
                <div className="header row">
                    <LogIn />
                    <NavBar />
                    <div className="header-title col-md-12 text-center">
                        <h1 className="header-title__text"> Ісланд-Україна</h1>
                    </div>

                </div>
            </div>
        </div>
        )

};

export default Header;