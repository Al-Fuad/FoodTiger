import React from 'react'
import styles from './Navbar.module.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = React.useState('home');
  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="" className={styles.logo} />
      <ul className={styles.navbarMenu}>
        <Link to='/' onClick={() => { setMenu('home') }} className={menu == 'home' ? styles.active : ''}>home</Link>
        <a href='#explore-menu' onClick={() => { setMenu('menu') }} className={menu == 'menu' ? styles.active : ''}>menu</a>
        <a href='#app-download' onClick={() => { setMenu('mobile-app') }} className={menu == 'mobile-app' ? styles.active : ''}>mobile-app</a>
        <a href='#footer' onClick={() => { setMenu('contact') }} className={menu == 'contact' ? styles.active : ''}>contact</a>
      </ul>
      <div className={styles.navbarActions}>
        <img src={assets.search_icon} alt="" />
        <div className={styles.basketIcon}>

          <img src={assets.basket_icon} alt="" />
          <div className={styles.dot}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar