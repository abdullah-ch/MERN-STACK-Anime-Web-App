const mongoose = require("mongoose");
const express = require("express");
const { Animes } = require("../models/anime");

const router = express.Router();

async function createAnime(animeName) {
  try {
    var anime = new Animes({
      animeName: animeName,
    });

    var anime = await anime.save();
    console.log(anime);
  } catch (err) {
    console.log(err.message);
  }
}

// createAnime("Berserk");

router.get("/", async (req, res) => {
  const anime = await Animes.find();
  return res.send(anime);
});

router.post("/add", async (req, res) => {
  console.log("Heeeere");
  console.log(req.body.animeName);
  var anime = new Animes({
    animeName: req.body.animeName,
  });
  anime = await anime.save();
  return res.send(anime);
});

router.put("/update/:id", async (req, res) => {
  var anime = await Animes.findById(req.params.id);
  if (!anime)
    return res.status(404).send(`Bro, we dont have any anime of such Id..`);

  anime.set({
    animeName: req.body.animeName,
  });

  anime = await anime.save();
  return res.send(anime);
});

router.delete("/delete/:id", async (req, res) => {
  const anime = await Animes.deleteOne({ _id: req.params.id });
  if (!anime) return res.status(404).send("ID not found");

  return res.send(anime);
});

module.exports = router;
