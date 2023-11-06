const User = require("../../models/User");
const auth = require("../../config/auth");
const FavoriteMovie = require("../../models/FavoriteMovie");
const router = require('express').Router();

router.post('/watchlist/:movieId/:userId', async (req, res) => {
    const { userId, movieId } = req.params;
    try {
        const userFavorites = await FavoriteMovie.find({ userId, movieId });
        if (userFavorites.length > 0) {
            return res.status(400).send({ message: 'You already liked this movie!' });
        }
        const favoriteMovie = new FavoriteMovie({
            movieId,
            userId,
        });
        await favoriteMovie.save();
        res.send({ message: 'You have successfully liked the movie!' });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/watchlist/:movieId/:userId', async (req, res) => {
    const { userId, movieId } = req.params;
    try {
        const userFavorites = await FavoriteMovie.find({ userId, movieId });
        if (userFavorites.length === 0) {
            return res.status(400).send({ message: 'Favorite movie not found' });
        }
        await FavoriteMovie.findOneAndDelete({ userId, movieId });
        res.send({ message: 'You have successfully unliked the movie!' });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/watchlist/:userId', auth, async (req, res) => {
    const { userId } = req.params;
    try {
        const userFavorites = await FavoriteMovie.find({ userId });
        if (!userFavorites) {
            return res.sendStatus(404);
        }
        res.send(userFavorites.map((movie) => movie.movieId));
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/watchlist/:movieId/:userId', auth, async (req, res) => {
    const { userId, movieId } = req.params;
    try {
        const userFavorites = await FavoriteMovie.find({ userId, movieId });
        if (!userFavorites) {
            return res.sendStatus(404);
        }
        res.send(userFavorites.map((movie) => movie.movieId));
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;