const express = require('express');
const app = express();
const controllers = require('./controllers')
const methodOverride = require('method-override')

const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'))
// app.use('/cars', controllers.cars)

app.get("/cars", (req, res)=>{
    res.render('new.ejs')
});

app.listen(PORT, ()=>{
    console.log(`I am listening to ${PORT}`)
})