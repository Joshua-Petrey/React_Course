import { useRef, useContext } from "react"
import styles from './NewTodo.module.css'
import { TodosContext } from "../store/todosContext";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    if(enteredText.trim().length === 0){
      return
    }

    todosCtx.addTodo(enteredText)
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type='text' id='text' ref={textInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;