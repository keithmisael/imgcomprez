const express = require('express');
const app = express();
const mainRouter = require('./routes/router')
const port = 8080;

// Template
app.set('view engine', 'ejs');

// Home page route
app.get('/',(req, res) => res.render('index', {title: 'Home'}));

app.use(express.urlencoded({extended:true}))

// Main router
app.use(mainRouter);


// Server
app.listen(process.env.PORT || port, error => {
  if (error)
    throw error;
  else
    console.log("Server is running");
});