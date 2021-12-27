import { Fragment } from 'react';
import styles from './Header.module.css';
// import local image
import mealsImage from '../../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (<Fragment>
    <header className={styles.header}>
      <h1>Good Eats </h1>
      <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
    </header>
    <div className={styles['main-image']}>
      <img src={mealsImage} alt="Table full of food" />
    </div>
  </Fragment>)
}

export default Header