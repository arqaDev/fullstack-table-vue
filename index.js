require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}
app.get('/', (req, res) => res.json({message: 'hello'}))
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started at ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()
