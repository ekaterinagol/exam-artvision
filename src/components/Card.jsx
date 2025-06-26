import React from "react"; 
import { Link, useLocation } from "react-router-dom"; 
import classes from "./card.module.css"

function Card({ title, date, time, image, buttonText = 'Записаться' }) {
    return (
      <div className={classes.card}>
        <div className={classes.imageCont}>
          <img src={image} alt={title} className={classes.image} />
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}>{title}</h3>
          <div className={classes.details}>
            <p>Дата: {date}</p>
            <p>Время: {time}</p>
          </div>
          <Link 
                to="/Events/register" 
                state={{ event: title }} 
                className={classes.button}>
                Записаться
            </Link>
        </div>
      </div>
    );
  }
  
  export default Card;