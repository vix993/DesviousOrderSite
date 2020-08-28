import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.jpg';
import './Menu.css';
import Button from '../Button'

// {/* <Button
//     as={Link}
//     className="ButtonLink"
//     to="/register/content"
// >
// New Content
// </Button> */}

function Menu() 
{
    return (
        <nav className="Menu">
            <Link to="/">
                <img
                className="Logo"
                src={Logo}
                alt='desviousorderlogo'></img>
            </Link>
        </nav>
    );
}

export default Menu;