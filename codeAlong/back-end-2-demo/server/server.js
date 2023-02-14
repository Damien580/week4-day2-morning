// let { apple } = require('/controller')
// console.log(apple)
// console.log(require('/controller'))

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const{
    getMovies,
    addMovies,
    updateRating,
    deleteMovies
} = require('./controller')







app.get('/api/movies', getMovies)
app.post('/api/movies', addMovies)
app.put('/api/movies/:id', updateRating)
app.delete('/api/movies/:id', deleteMovies)

app.listen(4004, console.log('server up on 4004'))