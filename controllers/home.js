const Photo = require("../models/Photo");

exports.homeView = async (req, res) => {
  const photos = await Photo.find();
  res.render("reviews", { photos });
};
