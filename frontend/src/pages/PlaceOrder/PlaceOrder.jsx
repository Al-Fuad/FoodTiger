import { useContext } from 'react';
import styles from './PlaceOrder.module.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className={styles.placeOrder}>
      <div className={styles.placeOrderLeft}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multiFields}>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className={styles.multiFields}>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className={styles.multiFields}>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className={styles.placeOrderRight}>
        <div className={styles.cartTotal}>
          <p className={styles.title}>Cart Totals</p>
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
              <p>${getTotalCartAmount() + getTotalCartAmount()==0?0:2}</p>
            </div>
          </div>
          <button onClick={() => navigate('/payment')}>Payment</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder