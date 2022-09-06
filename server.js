const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => {
    res.status(200).send('API Runing')
})

// init middlewares 
app.use(express.json())

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App succesfully started on port ${PORT} ...`)
})

