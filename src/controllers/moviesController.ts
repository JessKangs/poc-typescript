import connection from "../database/connection.js";
import 'dotenv/config';
import {Request, Response} from "express"

async function insertMovie (req: Request, res: Response) {
    const {name, platform, genre, status} = req.body;

    try {
        await connection.query(`INSERT INTO movies (name, platform, genre, status) VALUES ($1, $2, $3, $4);`, [name, platform, genre, status]);

        res.status(201).send("ok")
    } catch (error) {
        res.status(409)
    }
}

async function getMoviesByGenre (req: Request, res: Response) {
    const {genre} = req.params;

    try {
        let response = await connection.query(`SELECT * FROM movies WHERE genre = $1;`, [genre]);

        res.status(200).send(response.rows)
    } catch (error) {
        res.status(409)
    }
}

async function getMoviesByPlatform(req: Request, res: Response) {
    const {platform} = req.params;

    try {
        let response = await connection.query(`SELECT * FROM movies WHERE platform = $1;`, [platform]);

        res.status(200).send(response.rows)
    } catch (error) {
        res.status(409)
    }
}

async function updateMovie(req: Request, res: Response) {
    const {name} = req.params;

    try {
        let response: {status: string} = (await connection.query('SELECT status FROM movies WHERE name = $1;', [name])).rows[0]

        if (response.status === 'Not watched') {
            await connection.query(`UPDATE movies SET status = 'Watched' WHERE name = $1;`, [name]);
        } else {
            await connection.query(`UPDATE movies SET status = 'Not watched' WHERE name = $1;`, [name]);
        }
        res.status(201).send('Updated!')
    } catch (error) {
        res.status(409)
    }
}

async function deleteMovie(req: Request, res: Response) {
    const {moviename} = req.params;

    let response = (await connection.query('SELECT id FROM movies WHERE name = $1;', [moviename])).rows[0]
    console.log(response.id)

    try {
         await connection.query(`DELETE FROM movies WHERE id = ${response.id};`)
            console.log("ihul")
        res.status(201).send('Deleted!')
    } catch (error) {
        res.status(409)
    }
}

export {insertMovie, getMoviesByGenre, getMoviesByPlatform, updateMovie, deleteMovie}