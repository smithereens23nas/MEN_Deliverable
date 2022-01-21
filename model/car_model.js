const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    car_make: {
        type: String,
        required: [true, 'Please enter the car make.']
    },
    car_model: {
        type: String,
        required: [true, 'Please enter the car model.'],
    },
    price: {
        type:Number,
        required: [true, 'Please enter the price.'],
        min:[0, 'Price can not be less than 0']
    },
    image: {
        type: String,
        required: [true, "image can not be empty"],
    },
    description: {
        type: String,
    }
});

const Car = mongoose.model('Car', productSchema);
module.exports = Car;