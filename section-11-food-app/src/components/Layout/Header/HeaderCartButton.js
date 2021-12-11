import styles from './HeaderCartButton.module.css'
import CartIcon from '../../Cart/CartIcon'


const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Yuor Cart</span>
      <span className={styles.badge} ># Items in cart</span>
    </button >
  );
}

export default HeaderCartButton