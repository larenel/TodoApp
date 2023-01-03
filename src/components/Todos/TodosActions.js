import Button from '../Ui/Button'
import styles from './TodosActions.module.css'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
function TodosActions({ resetTodos, deleteCompleted, completedTodosExist }) {
  return (
    <div className="todosActionsContainer">
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!completedTodosExist}
        onClick={deleteCompleted}
        title="Clear Complet ed Todos"
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
