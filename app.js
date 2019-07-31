//<=========set my const variables to require express/ the path / and my json data. Also set my port number to 3000 to be used below. 
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const data = require('./data.json')
const projects = data.projects

//<=========app.set is setting my application to view a folder or file.====================
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "views"))

//<=========enables express to serve static files
app.use("/static", express.static(__dirname + '/public'))

//<=========app.get matches the specific requested route and responds with a render that target the identified pug.
app.get('/', (req, res) => {
    res.render('index', { projects })
});

app.get('/about', (req, res) => {
    res.render("about")
})

app.get('/projects/:id', (req, res) => {
    res.locals.project = data.projects[parseInt(req.params.id)];
    res.render("project")
})

//<=========Error Middle Handler===================================================
app.use((req, res, next) => {
    const err = new Error("Oh No !An error has occured")
    err.status = 404
    next(err)
})
app.use((err, req, res, next) => {
    res.locals.error = err
    res.status(err.status)
    res.render('error')
})
//<===========app.listen is listening for my port (3000) to run my webpage============
app.listen(port);
console.log("This application is listening on port " + port)
