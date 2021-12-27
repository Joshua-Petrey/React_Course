import { useContext, useEffect, useState } from 'react';
import CartContext from "../../../store/cart-context";

import styles from './HeaderCartButton.module.css'
import CartIcon from '../../Cart/CartIcon'

// props.onClick is drilled from app.js to header to here
const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  // get cart items, so we dont fire useEffect on every cartContext prop change
  const { items } = cartContext;

  const numberOfItemsInCart = items.reduce(
    (totalItems, currItem) => {
      return totalItems + currItem.amount;
    },
    0
  );

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      // Remove .bump class from btnClasses
      setBtnIsHighlighted(false)
    }, 300)

    // reset timer
    return () => {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItemsInCart}</span>
    </button>
  );
}

export default HeaderCartButton