import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

function Filters({ search, onSearch, status, onStatus, onReset }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
      <TextField
        label="Поиск по названию"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        size="small"
        sx={{ flexGrow: 1 }}
      />

      <TextField
        select
        label="Статус"
        value={status}
        onChange={(e) => onStatus(e.target.value)}
        size="small"
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="all">Все</MenuItem>
        <MenuItem value="completed">Выполненные</MenuItem>
        <MenuItem value="active">Невыполненные</MenuItem>
      </TextField>

      <Button variant="outlined" onClick={onReset}>
        Сбросить
      </Button>
    </Box>
  )
}

export default Filters
