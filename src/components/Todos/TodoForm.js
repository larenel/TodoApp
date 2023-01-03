import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../Ui/Button'
function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length > 0 && text.charAt(0) !== ' ') {
      addTodo(text)
      console.log(text)
    }

    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new Todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default TodoForm
