import React, { useState } from 'react'
import Todo from "../data-models/todo";

type TodosContextObject = {
  items: Todo[],
  addTodo: (enteredText: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
})

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const onAddToDoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText)
    setTodos((prevState) => {return prevState.concat(newTodo)})
  }

  const onRemoveTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: onAddToDoHandler,
    removeTodo: onRemoveTodoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodoContextProvider