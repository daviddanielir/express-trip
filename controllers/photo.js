const Photo = require("../models/Photo");

exports.addPhotoView = (req, res) => {
  res.render("addphoto");
};

exports.addPhoto = async (req, res) => {
  const { title, description } = req.body;
  const { secure_url, originalname } = req.file;

  console.log(req.file);

  await Photo.create({
    title,
    description,
    imgPath: secure_url,
    imgName: originalname
  });

  res.redirect("/photo/reviews");
};
