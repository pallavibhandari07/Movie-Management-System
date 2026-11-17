try {
    require("dotenv").config();
} catch (e) {
    // dotenv optional fallback
}
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/movieDB";

// Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully...");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err.message);
    });

// Movie Schema
const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        minlength: 3,
        required: true
    },
    director: {
        type: String,
        minlength: 3,
        required: true
    },
    genre: {
        type: String,
        minlength: 3,
        required: true
    },
    releaseYear: {
        type: Number,
        min: 1950,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    }
});

// Model
const Movie = mongoose.model("Movie", movieSchema);

// Home Route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Delete Movie
app.get("/delete/:userid", async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.userid);
        res.redirect("/getdata");
    } catch (error) {
        res.status(500).send("Error deleting movie.");
    }
});

// Edit Movie Form
app.get("/edit/:userid", async (req, res) => {
    try {
        const data = await Movie.findById(req.params.userid);
        if (!data) return res.status(404).send("Movie not found.");
        res.render("edit.ejs", { data });
    } catch (error) {
        res.status(500).send("Error fetching movie for edit.");
    }
});

// Update Movie
app.post("/update/:userid", async (req, res) => {
    try {
        await Movie.findByIdAndUpdate(
            req.params.userid,
            req.body,
            { new: true, runValidators: true }
        );
        res.redirect("/getdata");
    } catch (error) {
        res.status(500).send("Error updating movie.");
    }
});

// Get All Movies
app.get("/getdata", async (req, res) => {
    try {
        const allmovie = await Movie.find();
        res.render("movie.ejs", { allmovie });
    } catch (error) {
        res.status(500).send("Error fetching movies.");
    }
});

// Show Create Form
app.get("/insertdata", (req, res) => {
    res.render("form.ejs");
});

// Create Movie
app.post("/createdata", async (req, res) => {
    try {
        await Movie.create(req.body);
        res.redirect("/getdata");
    } catch (error) {
        res.status(500).send("Something Went Wrong Creating Movie...");
    }
});

// Server Listen
app.listen(PORT, () => {
    console.log(`Server is Running at Port ${PORT}`);
});
