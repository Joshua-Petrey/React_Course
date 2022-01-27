import Todo from "../data-models/todo"
import styles from './TodoItem.module.css'

const TodoItem: React.FC<{item: Todo; onRemoveTodo: () => void}> = (props) => {
  
  return (
  <li className={styles.item} onClick={props.onRemoveTodo}>{props.item.text}</li>
  )
}

export default TodoItem