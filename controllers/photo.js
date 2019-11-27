const Photo = require("../models/Photo");

exports.addPhotoView = (req, res) => {
  res.render("addphoto");
};

exports.addPhoto = async (req, res) => {
  const { title, description } = req.body;
  const { secure_url, originalname } = req.file;
  const creator = req.user._id

  await Photo.create({
    title,
    description,
    imgPath: secure_url,
    imgName: originalname,
    creator
  });

  res.redirect("/photo/reviews");
};
