import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css'
import { TodosContext } from "../store/todosContext";

const Todos: React.FC = () => {
  
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos