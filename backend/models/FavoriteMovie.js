const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteMovieSchema = Schema(
    {
        movieId: Number,
        userId: String,
    },
    { timestamps: true }
);

const FavoriteMovie = mongoose.model('FavoriteMovie', favoriteMovieSchema);

module.exports = FavoriteMovie;
