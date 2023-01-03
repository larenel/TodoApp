import styles from './TodoList.module.css'
import Todo from './Todo'
function TodoList({ todos, deleteToDo, toggleTodo }) {
  return (
    <div className={styles.toDoListContainer}>
      {!todos.length && <h2>Empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteToDo={deleteToDo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}
export default TodoList
