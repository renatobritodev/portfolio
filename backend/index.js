const express = require('express')

const PORT = 3000
const LOCALHOST = 'localhost'

const app = express()

// static assets
app.use(express.static('../frontend/public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.all('*', (req, res) => {
  res
    .status(404)
    .send('Resource not found! <br /> <a href="index.html">Home</a>')
})

app.listen(PORT, LOCALHOST, () =>
  console.log(`Server is listening on port http://${LOCALHOST}:${PORT}`)
)
