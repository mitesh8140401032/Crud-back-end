import express from 'express'

import cors from 'cors'
import postdoc from './Rout/Routt.js'
import middlware from './Midd/center.js'
import mongoD from './DataBase/mongodb.js'
const app = express()
const PORT = process.env.PORT || 8080
const Link = "mongodb://127.0.0.1:27017/"
app.use(express.json())
app.use(cors())

mongoD(Link)
app.use(middlware)
app.use('/', postdoc)
app.listen(PORT, () => {
    console.log("Server Start http://localhost:" + PORT)
})