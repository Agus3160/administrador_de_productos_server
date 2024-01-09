const express = require('express')
const cors = require('cors')
const connectToDB = require('./config/mongoose.config')
const { errorHanlder } = require('./libs/errorHandler')
const products = require('./route/products')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToDB() //Connect to DB

app.use('/api/products', products)

app.use(errorHanlder)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
