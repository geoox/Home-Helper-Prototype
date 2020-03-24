const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Advertisement = require('../models/advertisement');
var faker = require('faker');

router.get("/hello", (req, res, next) => {
    return res.status(200).json({
        "message": "hello"
    });
});

router.post("/new_ad", (req, res, next) => {
    const newAd = new Advertisement({
        name: req.body.name,
        description: req.body.description,
        date: new Date(),
        remuneration: req.body.remuneration,
        owner_name: req.body.owner_name,
        location: req.body.location
    })

    newAd
    .save()
    .then(result => {
        return res.status(200).json({result})
    })
    .catch(err => res.status(500).json(err));
})

router.get("/ads", (req, res, next) => {
    Advertisement.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
})

router.post("/generate_random", (req, res, next) => {

    const NO_ELEMENTS = req.body.no_elements;

    for(let i = 0; i < NO_ELEMENTS; i++){
        console.log("Processing index: "+i+'\n');
        const newAd = new Advertisement({
            name: faker.random.words(),
            description: faker.lorem.sentence(),
            date: faker.date.past(),
            remuneration: faker.random.number({
                'min': 100,
                'max': 5000
            }),
            owner_name: faker.name.findName(),
            location: faker.address.city()
        })

        .save()
        .then(result => {
            if(i === NO_ELEMENTS-1) return res.status(200).json({"result": "Success"})
        })
        .catch(err => res.status(500).json(err));
    }
})

router.get("/generate_500", (req,res,next) => {
    for(let i = 0; i < 500; i++){
        console.log("Processing index: "+i+'\n');
        const newAd = new Advertisement({
            name: faker.random.words(),
            description: faker.lorem.sentence(),
            date: faker.date.past(),
            remuneration: faker.random.number({
                'min': 100,
                'max': 5000
            }),
            owner_name: faker.name.findName(),
            location: faker.address.city()
        })

        .save()
        .then(result => {
            if(i === 499) return res.status(200).json({"result": "Success"})
        })
        .catch(err => res.status(500).json(err));
    }
})


module.exports = router;