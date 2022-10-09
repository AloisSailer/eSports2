import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio1' },
    { id: 2, name: 'Anúncio2' },
    { id: 3, name: 'Anúncio3' }
  ])
})

app.listen(3333)
