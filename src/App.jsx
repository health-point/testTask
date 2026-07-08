import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { getTodos } from './api'
import Filters from './components/Filters'
import TaskList from './components/TaskList'
import TaskModal from './components/TaskModal'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')

  const [selected, setSelected] = useState(null)

  function loadTodos() {
    setLoading(true)
    setError('')
    getTodos()
      .then((data) => {
        setTodos(data)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    loadTodos()
  }, [])

  let filtered = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase())
  })

  if (status === 'completed') {
    filtered = filtered.filter((t) => t.completed === true)
  }
  if (status === 'active') {
    filtered = filtered.filter((t) => t.completed === false)
  }

  function resetFilters() {
    setSearch('')
    setStatus('all')
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Список задач
      </Typography>

      <Filters
        search={search}
        onSearch={setSearch}
        status={status}
        onStatus={setStatus}
        onReset={resetFilters}
      />

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Найдено задач: {filtered.length}
          </Typography>

          {filtered.length === 0 ? (
            <Alert severity="info">Ничего не найдено</Alert>
          ) : (
            <TaskList todos={filtered} onOpen={setSelected} />
          )}
        </>
      )}

      <TaskModal task={selected} onClose={() => setSelected(null)} />
    </Container>
  )
}

export default App
