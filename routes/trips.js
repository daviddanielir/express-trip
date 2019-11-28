const express = require('express');
const router  = express.Router();

const Trip = require('../models/trip.js');

router.get("/trips", (req, res, next) => {
    Trip
        .find()
        .then((data) => {
            res.render("trips/index",{data});
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/trips/:id", (req, res, next) => {
    let { id } = req.params;
    Trip
        .findById(id)
        .then((data) => {
            res.render("trips/show",data);
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/new-trips", (req, res, next) => {
    res.render("trips/new");
})

router.post("/trips", (req, res, next) => {
    Trip
        .create(req.body)
        .then(() => {
            res.redirect("/trips");
            //le puse puse trips
        })
        .catch((err) => {
            res.render("trips/new");
            console.log(err);
        })
})

router.get("/trips/:id/delete", (req, res, next) => {
    let { id } = req.params;
    Trip
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect("/trips");
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

router.get("/trips/edit/:id/", (req, res, next) => {
    let { id } = req.params;
    Trip
    .findById(id)
    .then(() => {
        res.render("trips/edit", {id});
    })
    .catch((err) => {
        next();
        console.log(err);
    })
})

router.post("/trips/edit/:id", (req, res, next) => {
    let { id } = req.params;
    Trip
        .findByIdAndUpdate(id, req.body)
        .then(() => {
            res.redirect("/trips");
        })
        .catch((err) => {
            next();
            console.log(err);
        })
})

module.exports = router;