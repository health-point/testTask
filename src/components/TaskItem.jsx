import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const TaskItem = ({ todo, onOpen }) => {
  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => onOpen(todo)}>
        <CardContent>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <Typography sx={{ flex: 1 }}>{todo.title}</Typography>

            {todo.completed ? (
              <Chip label="Выполнена" color="success" size="small" />
            ) : (
              <Chip label="Не выполнена" color="warning" size="small" />
            )}
          </div>

          <Typography variant="caption" color="text.secondary">
            Пользователь #{todo.userId}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default TaskItem
