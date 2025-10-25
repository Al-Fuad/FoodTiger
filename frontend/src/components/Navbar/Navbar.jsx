import React from 'react'
import styles from './Navbar.module.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = React.useState('home');
  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="" className={styles.logo} />
      <ul className={styles.navbarMenu}>
        <li onClick={() => { setMenu('home') }} className={menu == 'home' ? styles.active : ''}>home</li>
        <li onClick={() => { setMenu('menu') }} className={menu == 'menu' ? styles.active : ''}>menu</li>
        <li onClick={() => { setMenu('mobile-app') }} className={menu == 'mobile-app' ? styles.active : ''}>mobile-app</li>
        <li onClick={() => { setMenu('contact') }} className={menu == 'contact' ? styles.active : ''}>contact</li>
      </ul>
      <div className={styles.navbarActions}>
        <img src={assets.search_icon} alt="" />
        <div className={styles.basket_icon}>

          <img src={assets.basket_icon} alt="" />
          <div className={styles.dot}></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar