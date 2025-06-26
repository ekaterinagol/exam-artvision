import React from 'react';
import classes from './footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                {/* Логотип и название */}
                <div className={classes.logoSection}>
                    <h2 className={classes.logo}>ARTVISION</h2>
                    <p className={classes.tagline}>Ваше пространство искусства</p>
                </div>
                
                <div className={classes.navSection}>
                    <h3 className={classes.sectionTitle}>Навигация</h3>
                    <ul className={classes.navList}>
                        <li><a href="/" className={classes.navLink}>Главная</a></li>
                        <li><a href="/about" className={classes.navLink}>О нас</a></li>
                        <li><a href="/events" className={classes.navLink}>Мероприятия</a></li>
                    </ul>
                </div>
                
                {/* Контакты */}
                <div className={classes.contactSection}>
                    <h3 className={classes.sectionTitle}>Контакты</h3>
                    <div className={classes.contactItem}>
                        <span className={classes.contactLabel}>Тех. поддержка:</span>
                        <span className={classes.contactValue}>ggg@vision.ru</span>
                    </div>
                    <div className={classes.contactItem}>
                        <span className={classes.contactLabel}>Телефон:</span>
                        <span className={classes.contactValue}>+31 (044) 738-23-54</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;