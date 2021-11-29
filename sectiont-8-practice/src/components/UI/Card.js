import styles from './Card.module.css'

const Card = (props) => {
  // ${props.className} is the value of the rendered elements className 
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>
}

export default Card