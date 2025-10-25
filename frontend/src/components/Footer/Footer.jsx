import { assets } from '../../assets/assets';
import styles from './Footer.module.css';
import React from 'react'

const Footer = () => {
    return (
        <div className={styles.footer} id={styles.footerId}>
            <div className={styles.footerContent}>
                <div className={styles.footerContentLeft}>
                    <div className={styles.logoContainer}>
                    <img className={styles.logo} src={assets.logo} alt="" />
                    <p>FoodTiger</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod maxime dolores? Incidunt dolorum eius atque dignissimos esse impedit eligendi.</p>
                    <div className={styles.footerSocialIcons}>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className={styles.footerContentCenter}>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className={styles.footerContentRight}>
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+880 1303 729735</li>
                        <li>contact@foodtiger.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className={styles.footerCopyright}>Copyright 2025 © foodtiger.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer