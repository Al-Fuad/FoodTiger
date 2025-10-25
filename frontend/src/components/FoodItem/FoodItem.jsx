import { assets } from '../../assets/assets'
import styles from './FoodItem.module.css'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';

const FoodItem = ({id, name, price, description, image}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    return (
        <div className={styles.foodItem}>
            <div className={styles.foodItemImageContainer}>
                <img className={styles.foodItemImage} src={image} alt="" />
                {
                    !cartItems[id]
                    ? <img src={assets.add_icon_white} alt='' className={styles.add} onClick={() => {addToCart(id)}} />
                    : <div className={styles.foodItemCounter}>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className={styles.foodItemInfo}>
                <div className={styles.foodItemNameRating}>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className={styles.foodItemDesc}>
                    {description}
                </p>
                <div className={styles.foodItemPrice}>
                    <p>${price}</p>
                </div>

            </div>
        </div>
    )
}

export default FoodItem