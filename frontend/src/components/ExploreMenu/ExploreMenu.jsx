import React from 'react'
import styles from './ExploreMenu.module.css'
import { menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className={styles.exploreMenu} id={styles.exploreMenuId}>
        <h1>Explore our menu</h1>
        <p className={styles.exploreMenuText}>
            Choose from our wide range of delicious meals and enjoy a culinary experience like no other. Whether you're craving something classic or looking to try something new, our menu has something for everyone.
        </p>
        <div className={styles.exploreMenuList}>
            {menu_list.map((item, index) => {
                return <div onClick={()=>{
                    setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className={styles.exploreMenuListItem}>
                    <img className={category===item.menu_name?styles.active:""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu