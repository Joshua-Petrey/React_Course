import Modal from '../UI/Modal/Modal';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem";
import Checkout from './Checkout';
import styles from './Cart.module.css';
import { useState } from 'react/cjs/react.development';

const Cart = (props) => {
  const cartContext = useContext(CartContext)
  const [isCheckout, setIsChackout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false)


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

  const orderHandler = () => {
    setIsChackout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    // assume fetch always works
     await fetch("https://react-hhtp-32085-default-rtdb.firebaseio.com/orders.json", {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items
      })
    });
    setIsSubmitting(false)
    setDidSubmit(true)
    cartContext.clearCart()
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

    const modalActions = (
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    );


  const cartModalContent = (
    <React.Fragment>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onCancel={props.onCloseCart}
          onConfirm={submitOrderHandler}
        ></Checkout>
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order</p>
      <div className={styles.actions}>
        <button className={styles["button"]} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart