const Photo = require("../models/Photo");

exports.homeView = async (req, res) => {
  const photos = await Photo.find().populate("creator");
  res.render("reviews", { photos });
};
