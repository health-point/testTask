const b = 'https://jsonplaceholder.typicode.com'

export async function getTodos() {
  const response = await fetch(b + '/todos')
  if (!response.ok) {
    throw new Error('не удалось загрузить задачи')
  }
  const data = await response.json()
  return data.slice(0, 15)
}

export async function getUser(id) {
  const response = await fetch(b + '/users/' + id)
  if (!response.ok) {
    throw new Error('не удалось загрузить пользователя')
  }
  return response.json()
}
