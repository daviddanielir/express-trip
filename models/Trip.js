const { model, Schema } = require("mongoose");


const trip = new Schema({
    title: String,
    plce: String,
    plot: String
  },
{ timestamps: true }
);


const Trip = model("Trip", trip);

module.exports = Trip;