import 'dotenv/config';
import express from 'express';
import { insertMovie, getMoviesByGenre, getMoviesByPlatform, updateMovie, deleteMovie } from '../controllers/moviesController.js';

const router = express.Router();

router.post('/movies-list', insertMovie)

router.get('/movies/1/:genre', getMoviesByGenre)

router.get('/movies/2/:platform', getMoviesByPlatform)

router.put('/movies/3/:name', updateMovie)

router.delete('/movies/4/:moviename', deleteMovie)

export default router;