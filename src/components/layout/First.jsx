import React from "react"; 
import { Link } from "react-router-dom"; 
import img from "../img/img1.jpg"

function First({ text }) { 
    return (
        <div>
            <h1>{ text }</h1>
        </div>
    ); 
} 
export default First;