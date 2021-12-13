import Modal from '../UI/Modal/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem";
import styles from './Cart.module.css';

const Cart = (props) => {

  const cartContext = useContext(CartContext)

  // format total price
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
  // cart has items
  const hasItems = cartContext.items.length > 0;

  // passed to CartItem
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  }
  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1})
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onCloseCart}>Close</button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart