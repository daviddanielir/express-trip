const router = require("express").Router();
const { addPhotoView, addPhoto } = require("../controllers/photo");
const { homeView } = require("../controllers/home");
const uploadCloud = require("../config/cloudinary");
const catchErrors = require("../middlewares/catchErrors");

router.get("/add", addPhotoView);
router.post("/add", uploadCloud.single("photo"), catchErrors(addPhoto));

router.get('/reviews', homeView)

module.exports = router; 
