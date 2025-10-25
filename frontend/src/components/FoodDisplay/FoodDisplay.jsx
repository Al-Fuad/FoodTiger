import { useContext } from 'react';
import styles from './FoodDisplay.module.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className={styles.foodDisplay} id={styles.foodDisplayId}>
        <h2>Top dishs near you</h2>
        <div className={styles.foodDisplayList}>
            {food_list.map((item, index)=>{
              if(category=='All' || category==item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay;