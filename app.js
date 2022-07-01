const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const router = require('./routes/employee.route')
const adminRouter = require('./routes/admin.route')
require('dotenv').config()
const app = express()

var corsOptions = {
    origin:"http://localhost:8080"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/api',router)
app.use('/admin',adminRouter)

app.get('/', (req,res) => {
    res.json({
        message: "Welcome to the Employee Management System"
    })
})

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})

const db = require("./models")
// const { Router } = require('express')

db.mongoose.connect(db.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`Successfully connected to the Database`)
})
.catch((error) => {
    console.log(error)
    process.exit()
})