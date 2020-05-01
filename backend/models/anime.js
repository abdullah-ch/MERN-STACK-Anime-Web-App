const mongoose = require("mongoose");

// Creating a Schema

const schemaAnime = new mongoose.Schema({
  animeName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
});

// Modeling a Class on my Schema

const Animes = mongoose.model("Animes", schemaAnime);

module.exports.Animes = Animes;