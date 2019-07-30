const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const data= require('./data.json')
const projects = data.projects

app.set('view engine', 'pug')

app.use("/static", express.static(__dirname + '/public'))

app.set('views', path.join(__dirname, "views"))


app.get('/', (req, res) => {
       res.render('index', {projects})
    });
     

app.get('/about', (req, res) => {
   res.render("about")
})
        
app.get('/projects/:id', (req, res) => {
    res.locals.project = data.projects[parseInt(req.params.id)];
    res.render("project")
})

app.use((req, res, next) => {
    const err = new Error("Oh No !An error has occured")
    err.status = 404
   if (err){
    next(err)
}else{
    res.send(data)
}
})

app.listen(port);
    console.log("This application is listening on port " + port)
