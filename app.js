const express = require('express')
const app = express()
const data = require('../data/data.json')
const port = 3000

app.set('view engine', 'pug')
app.use(express.static('public'))

router.get('/', (req, res,) => {
    res.render('Home')
   
})

router.get('/', (req, res,) => {
    res.render('About')
    
})

app.listen(port, () => {
    console.log(`This application is listening on port ${port} `)
})