import styles from './Home.module.css';
import Header from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import { useState } from 'react';

const Home = () => {
  const [category, setCategory] = useState('All');
  return (
    <div className={styles.home}>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home