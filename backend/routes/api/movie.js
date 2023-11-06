const User = require("../../models/User");
const auth = require("../../config/auth");
const FavoriteMovie = require("../../models/FavoriteMovie");
const router = require('express').Router();

router.post('/favorite/:movieId/:userId', async (req, res) => {
    const _userId = req.params.userId;
    const _movieId = req.params.movieId;
    const userFavorites = await FavoriteMovie.find({ userId: _userId, movieId: _movieId });
    if(userFavorites.length > 0)
        return res.status(400).send({ message: 'You already liked !'} );

    const favoriteMovie = new FavoriteMovie({
        "movieId": _movieId,
        "userId": _userId,
    });
    try {
        await favoriteMovie.save();
        res.send({ message: 'You have successfully liked movie!' });
    } catch (e) {
        res.status(400).send(e);
    }
});
router.delete('/favorite/:movieId/:userId', async (req, res) => {
    const _userId = req.params.userId;
    const _movieId = req.params.movieId;
    const userFavorites = await FavoriteMovie.find({ userId: _userId, movieId: _movieId });
    if(userFavorites.length == 0)
        return res.status(400).send({ message: 'Favorite movie not found'} );

    try {
        await FavoriteMovie.findOneAndDelete({ userId: _userId, movieId: _movieId });
        res.send({ message: 'You have successfully unliked movie!' });
    } catch (e) {
        res.status(400).send(e);
    }
});
router.get('/favorite/:userId', auth, async (req, res) => {
    const _userId = req.params.userId;
    const userFavorites = await FavoriteMovie.find({ userId: _userId });
    try {
        return !userFavorites ? res.sendStatus(404) : res.send(userFavorites.map((movie) => movie.movieId));
    } catch (e) {
        res.status(400).send(e);
    }
});
router.get('/favorite/:movieId/:userId', auth, async (req, res) => {
    const _userId = req.params.userId;
    const _movieId = req.params.movieId;
    const userFavorites = await FavoriteMovie.find({ userId: _userId, movieId: _movieId });
    try {
        return !userFavorites ? res.sendStatus(404) : res.send(userFavorites.map((movie) => movie.movieId));
    } catch (e) {
        res.status(400).send(e);
    }
});
module.exports = router;