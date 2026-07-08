import { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { getUser } from '../api'

function TaskModal({ task, onClose }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!task) return
    setUser(null)
    getUser(task.userId).then((data) => setUser(data))
  }, [task])

  return (
    <Dialog open={task !== null} onClose={onClose} fullWidth maxWidth="sm">
      {task && (
        <>
          <DialogTitle>{task.title}</DialogTitle>
          <DialogContent>
            <Box sx={{ mb: 2 }}>
              {task.completed ? (
                <Chip label="Выполнена" color="success" size="small" />
              ) : (
                <Chip label="Не выполнена" color="warning" size="small" />
              )}
            </Box>

            <Typography variant="body2" color="text.secondary">
              ID задачи: {task.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              userId: {task.userId}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" gutterBottom>
              Исполнитель
            </Typography>

            {user ? (
              <>
                <Typography variant="body2">Имя: {user.name}</Typography>
                <Typography variant="body2">Email: {user.email}</Typography>
              </>
            ) : (
              <Typography variant="body2">Загрузка...</Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Закрыть</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}

export default TaskModal
