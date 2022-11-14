import express, { json } from "express";
import moviesRouter from "./routes/movies-router.js"
import 'dotenv/config';

const server = express();

server.use(json());
server.use(moviesRouter);

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Magic happens on ${PORT}...`)
});