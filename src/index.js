const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

require('./database')

app.use(express.json())
app.use(require('./routes'))

app.listen(3000 , () => {
    console.log(`Servidor rodando na porta ${port}`)
})