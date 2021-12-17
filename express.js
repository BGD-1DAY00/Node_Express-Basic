const express = require('express');
const app = express();
const PORT = 3000; 
const path = require('path')

app.set('view engine', 'ejs')
app.get('/',(req, res)=>{
  res.render('index')
});


app.listen(PORT, ()=>{
  console.log(`Server running at: http://localhost:${PORT}/`)
});
