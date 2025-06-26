import React from 'react'; 
import Card from '../components/Card';
import img1 from "../components/img/work1.png"
import img2 from "../components/img/work2.png"
import img3 from "../components/img/work3.png"


function Events() { 
    return (
        <section>
            <div class='part3'>
            <Card
                title="Мастер-класс по лепке"
                date="29 июня"
                time="17:00"
                image={img1}
            />
            <Card
                title="Мастер-класс по лепке"
                date="30 июня"
                time="15:00"
                image={img2}
            />
            <Card
                title="Выставка Юлии Шпиц"
                date="1 июля-15 июля"
                time="9:00-17:00"
                image={img3}
            />
            </div>
        </section>
        ); 
} 
export default Events; 