const express = require("express");
const router = express.Router();
const { Car } = require("../model");

router.get("/", function(req, res) {
    res.render("new.ejs")
})

router.post('/create', (req, res) => {
    // Start by console logging things out here for the req, then req.body
    Car.create(req.body, (error, createdCars) => {
        if(error) console.log(error);
        console.log(createdCars);


        res.redirect("/cars");
    })
})

// Car.deleteMany({}, (error, deletedCar) => {
//     if(error) console.log(error);
//     Car.insertMany(
//         [
//             {
//                 name: "Eric and Troy's Awesome class",
//                 price: 100,
//                 image: "https://i.pinimg.com/originals/81/6b/83/816b83a23a6f4b0405bd6699b854a6bd.jpg",
//                 description: "This is the best class because they named themselves the blue devils!",
//             },
//             {
//                 name: "Some other thing",
//                 price: 200,
//                 image: "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg",
//                 description: "Another description!",
//             },
//             {
//                 name: "Coders Unite",
//                 price: 500,
//                 image: "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
//                 description: "We love coding!",
//             },
//         ],
//           function (error, createdCar) {
//             if (error) {
//               return console.log(error);
//             }
//             console.log("=== Seed Complete ===");
//             console.log(createdCar);
//           }
//     )
//     console.log(deletedCar)
// }
// )

// router.get('/', (req, res) => {
    
//     Car.find({}, (error, foundCars) => {
//         if(error) return console.log(error);

//         console.log(foundCars)
//         context = {
//             Cars: foundCars
//         }
//         res.render('index.ejs', context);
//     })
//     /* 
//     1. the first param of render() is the .ejs file 
//     that we want to inject data into.
    
//     2. the second param is the data that we want 
//     to inject into the .ejs file (it must be an object)
//     */

//     /*	
//     there will be a variable available inside
//     the show.ejs file called Car, 
//     and its value the foundItem
//    */

// });

// router.post('/', (req, res) => {
//     // Start by console logging things out here for the req, then req.body
//     Cars.create(req.body, (error, createdCar) => {
//         if(error) console.log(error);
//         console.log(createdCar);


//         res.redirect("/Cars");
//     })
// })

// router.get("/create", function(req, res) {
//     res.render("new.ejs")
// })

// // show route
// // this route will catch GET requests to /Cars/index/ and respond with a single Car
// router.get('/:CarId', (req, res) => {
    
//     Cars.findById(req.params.CarId, (error, foundCar) => {
//         if (error) {
//             console.log(req.params)
//             console.log(error);
//             const context = { error: error };
//             return res.status(404).render("404", context);
//         }
//         /* 
//         1. the first param of render() is the .ejs file 
//         that we want to inject data into.
        
//         2. the second param is the data that we want 
//         to inject into the .ejs file (it must be an object)
//         */

//         /*	
//         there will be a variable available inside
//         the show.ejs file called Car, 
//         and its value the foundItem
//        */
//         res.render('show.ejs', {Car: foundCar});
//     });
    
// });

// router.delete('/:CarId', (req, res) => {
//     Cars.findByIdAndDelete(req.params.CarId, (error, deleteCar) => {
//         if(error) {
//             console.log(error);
//             res.send(error);
//         }

//         console.log(deleteCar);
//         res.redirect('/Cars')
//     })
// })

// router.get('/:CarId/edit', (req, res) => {
//     Cars.findById(req.params.CarId, (error, updatedCar) => {
//         if(error) console.log(error);

//         console.log(updatedCar);
//         res.render('edit.ejs', { Car: updatedCar})
//     })
// })

// router.put('/:CarId', (req, res) => {
//     console.log(`The request is ${req}`)
//     // console.log(`The request's body is ${req.body}`)

//     Cars.findByIdAndUpdate(req.params.CarId, req.body,(error, updatedCar) => {
//         if (error) return console.log(error);

//         console.log(updatedCar);

//         return res.redirect(`/Cars`);
//     });
// });

module.exports = router;

