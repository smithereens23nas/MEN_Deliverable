const express = require('express');
const app = express();
const controllers = require('./controllers')
const methodOverride = require('method-override')
require('./config/db.connection');
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'))

// app.use('/cars', controllers.cars)

app.get("/cars", function(req, res) {
    res.render("new.ejs")
})

app.post('/cars/create', (req, res) => {
    // Start by console logging things out here for the req, then req.body
    cars.create(req.body, (error, createdProduct) => {
        if(error) console.log(error);
        console.log(createdProduct);


        res.redirect("/cars/create");
    })
})

app.listen(PORT, ()=>{
    console.log(`I am listening to ${PORT}`)
})