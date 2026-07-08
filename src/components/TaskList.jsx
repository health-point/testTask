import Stack from '@mui/material/Stack'
import TaskItem from './TaskItem'

function TaskList({ todos, onOpen }) {
  return (
    <Stack spacing={1.5}>
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} onOpen={onOpen} />
      ))}
    </Stack>
  )
}

export default TaskList
