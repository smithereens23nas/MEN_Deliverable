const express = require("express");
const router = express.Router();
const { Car } = require("../model");

router.get("/", (req, res) => {
  Car.find({}, (error, car) => {
    if (error) {
      console.log(error);
    } 
    const context = {cars: car}
    res.render("index.ejs", context);
  });
});

router.get("/new", function (req, res) {
  res.render("new.ejs");
});

router.post("/create", (req, res) => {
  // Start by console logging things out here for the req, then req.body
  Car.create(req.body, (error, createdCars) => {
    if (error) console.log(error);
    console.log(createdCars);

    res.redirect("/cars");
  });
});

Car.deleteMany({}, (error, deletedCar) => {
  if (error) console.log(error);
  Car.insertMany(
    [
      {
        car_make: "Tesla",
        car_model: "Roadster",
        price: 200000,
        image:
          "https://www.teslarati.com/wp-content/uploads/2021/01/tesla-roadster-production-release-candidate-scaled.jpg",
        description:
          "A roadster (also spider, spyder) is an open two-seat car with emphasis on sporting appearance or character. Initially an American term for a two-seat car with no weather protection, usage has spread internationally and has evolved to include two-seat convertibles.",
      },
      {
        car_make: "Tesla",
        car_model: "Cybertruck",
        price: 40000,
        image:
          "https://uploads-ssl.webflow.com/61672da8a96ef1776c5a1374/6172fa5dacc22ba08b4fefac_shutterstock_1634989399-p-1600.jpeg",
        description:
          "Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.",
      },
      {
        car_make: "Tesla",
        car_model: "Model S",
        price: 95000,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ANZKvUeNGeOuQQw82HmbK9dSVPFOJNL0CA&usqp=CAU",
        description:
          "Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model S includes Tesla's latest active safety features, such as Automatic Emergency Braking, at no extra cost.",
      },
    ],
    function (error, createdCar) {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seed Complete ===");
      console.log(createdCar);
    }
  );
  console.log(deletedCar);
});

// // show route
// // this route will catch GET requests to /Cars/index/ and respond with a single Car
router.get('/:CarId', (req, res) => {

    Car.findById(req.params.CarId, (error, foundCar) => {
        if (error) {
            console.log(req.params)
            console.log(error);
            const context = { error: error };
            return res.status(404).render("404", context);
        }
        /*
        1. the first param of render() is the .ejs file
        that we want to inject data into.

        2. the second param is the data that we want
        to inject into the .ejs file (it must be an object)
        */

        /*
        there will be a variable available inside
        the show.ejs file called Car,
        and its value the foundItem
       */
        res.render('show.ejs', {car: foundCar});
    });

});

// router.delete('/:CarId', (req, res) => {
//     cars.findByIdAndDelete(req.params.CarId, (error, deleteCar) => {
//         if(error) {
//             console.log(error);
//             res.send(error);
//         }

//         console.log(deleteCar);
//         res.redirect('/cars')
//     })
// })

// router.get('/:CarId/edit', (req, res) => {
//     cars.findById(req.params.CarId, (error, updatedCar) => {
//         if(error) console.log(error);

//         console.log(updatedCar);
//         res.render('edit.ejs', { car: updatedCar})
//     })
// })

// router.put('/:CarId', (req, res) => {
//     console.log(`The request is ${req}`)
//     // console.log(`The request's body is ${req.body}`)

//     cars.findByIdAndUpdate(req.params.CarId, req.body,(error, updatedCar) => {
//         if (error) return console.log(error);

//         console.log(updatedCar);

//         return res.redirect(`/cars`);
//     });
// });

module.exports = router;
