import React from "react"; 
import { Link, useLocation } from "react-router-dom"; 
import classes from "./MainNav.module.css";
import First from './First'

function MainNav() { 
    const location = useLocation();
    
    const getHeaderText = () => { 
        switch(location.pathname) {
            case '/About':
                return "О НАС";
            case '/Events':
                return "МЕРОПРИЯТИЯ";
            default:
                return "ДОБРО ПОЖАЛОВАТЬ В КРЕАТИВНОЕ ПРОСТРАНСТВО ARTVISION";
        }
    };

    return ( 
        <div className={classes.block}>
            <div className={classes.header}>
                <div className={classes.logo}>ARTVISION</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/About">О нас</Link>
                        </li>
                        <li>
                            <Link to="/Events">Мероприятия</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.block1}>
            <First text={getHeaderText()} /> 
            </div>
        </div>
    ); 
} 

export default MainNav;