import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  const addToDoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const deleteToDoHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id))
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(
      todos.filter((el) => {
        return !el.isCompleted
      })
    )
  }

  const completedTodosCount = todos.filter((el) => el.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App!</h1>
      <TodoForm addTodo={addToDoHandler} />
      {todos.length > 0 && (
        <TodosActions
          resetTodos={resetTodoHandler}
          deleteCompleted={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}

      <TodoList
        todos={todos}
        deleteToDo={deleteToDoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h3>{`You completed ${completedTodosCount} todo${
          completedTodosCount > 1 ? 's' : ''
        }!`}</h3>
      )}
    </div>
  )
}

export default App
