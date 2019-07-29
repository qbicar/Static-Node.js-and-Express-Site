const express = require('express')
const app = express()
// const data = require('./data.json')
const port = 3000
const path = require('path')
// const project = data.projects

app.set('view engine', 'pug')

app.use("/static", express.static(__dirname + '/public'))

app.set('views', path.join(__dirname, "views"))
//app.use(express.static(path.join(__dirname, "public")))
//fs is for file system
const fs = require("fs");
const dataFile = fs.readFileSync('data.json', 'utf8');
const dataJson = JSON.parse(dataFile);
//parse to json data

app.get('/', (req, res,next) => {
        try 
        {
            res.locals.heading = 'My Portfolio';
            res.locals.portfolioDescription = 'Hello my name is Quster , here are some samples of some of my application working using JavaScript and jQuery.';
            res.locals.dataJson = dataJson;
            res.render('index');
        }
        catch (e) {
            next(new Error('Request could not be fulfilled'));
        }
    });
    // res.render('index', {project})


app.get('/about', (req, res, next) => {
//    res.render("about")
    // app.get('/about', (req, res, next) => {
        //Go through this code and catch any errors
        try {
            res.locals.name = "Quster Bicar";
            res.locals.title = "Full Stack JavaScript Developer.";
            res.locals.pitch = "I enjoy learning new applications, working with my colleagues and solving problems.";
            res.locals.skill1 = "Learning Management Systems";
            res.locals.skill2 = "Web Development";
            res.locals.skill3 = "Oracle and Microsoft SQL Server";
            res.locals.skill4 = "SharePoint";
            res.locals.skill5 = "Camtasia";
            res.locals.skill6 = "Microsoft Office Suite";

            res.locals.linkedin_url = "http://linkedin.com/";
            res.locals.github_url = "http://github.com/martyv4";
            res.locals.twitter_url = "http://twitter.com/";

            res.locals.phone = "0000000000";
            res.locals.email = "q@gmail.com";

            //Find a pug file named about.pug and use to render the page content
            res.render('about');
        }
        //Catch the error
        catch (e) {
            next(new Error('Request could not be fulfilled'));
        }
    });

// app.get('/layout', (req, res, ) => {
//     res.render("layout")
// })
app.get('/projects/:id', (req, res, next) => {
    //Go through this code and catch any errors
    try {
        //console.log(dataJson.projects[parseInt(req.params.id)]);
        res.locals.project = dataJson.projects[parseInt(req.params.id)]; //param ID is string, have to cast as int
        res.render('project');
        //res.send("You are asking for id#" + req.params.id);
    }
    catch (e) {
        next(new Error('Request could not be fulfilled'));
    }
});


// app.get('/projects/:id', (req, res, next ) => {
//     res.render("project")
// })

// app.use((req, res, next) => {
//     const err = new Error("Oh No !An error has occured")
//     err.status = 404
//    if (err){
//     //res.json({message: "Holy Crap"})
//     next(err)
// }else{
//     res.send(data)
// }
// })

app.listen(port);
    console.log("This application is listening on port " + port)
