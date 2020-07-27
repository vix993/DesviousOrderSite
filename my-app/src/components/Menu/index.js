import React from 'react';
import Logo from '../../assets/img/Logo.jpg';
import './Menu.css';
import Button from '../Button'

function Menu() 
{
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt='Aluraflixlogo'></img>
            </a>
            <Button className="ButtonLink" href="/">
                New Video
            </Button>
        </nav>
    );
}

export default Menu;