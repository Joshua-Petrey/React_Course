import reactDom from 'react-dom';
import { Fragment } from 'react'
import styles from './Modal.module.css'

// portaled to Dom through Modal. Gets props.onCloseCard from Modal
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseCart}></div>;
}
// portaled to Dom through Modal. Cart items is rendered inside
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const Modal = (props) => {
  return (
  <Fragment>
    {reactDom.createPortal(
      <Backdrop onConfirm={props.onConfirm} onCloseCart={props.onCloseCart} />,
      document.getElementById("modal-overlay")
    )}
    {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modal-overlay'))}
  </Fragment>);
}
export default Modal