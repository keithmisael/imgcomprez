const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})



app.listen(port, error => {
  if (error)
    throw error;
  else
    console.log("Server is running");
});