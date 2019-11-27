const { model, Schema } = require("mongoose");



const photoSchema = new Schema(
  {
    title: String,
    description: String,
    imgName: String,
    imgPath: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },

  },
  { timestamps: true }
);

module.exports = model("Photo", photoSchema);


