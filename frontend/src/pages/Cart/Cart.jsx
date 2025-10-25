import { useContext } from 'react';
import styles from './Cart.module.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <div className={styles.cartItemsTitle}>
          <p key='c1'>Items</p>
          <p key='c2'>Title</p>
          <p key='c3'>Price</p>
          <p key='c4'>Quantity</p>
          <p key='c5'>Total</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className={`${styles.cartItemsTitle} ${styles.cartItem}`}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className={styles.cartItemQuantity}>
                    <img onClick={() => removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[item._id]}</p>
                    <img onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt="" />
                  </div>
                  <p>${item.price * cartItems[item._id]}</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
        <hr />
      </div>
      <div className={styles.cartBottom}>
        <div className={styles.cartTotal}>
          <h2>Cart Totals</h2>
          <div>
            <div className={styles.cartTotalDetails}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()==0?0:2}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Checkout</button>
        </div>
        <div className={styles.cartPromocode}>
          <div>
            <p>If you have a promo code, Enter it here.</p>
            <div className={styles.cartPromocodeInput}>
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart