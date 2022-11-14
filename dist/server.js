import express, { json } from "express";
import moviesRouter from "./routes/movies-router.js";
import 'dotenv/config';
var server = express();
server.use(json());
server.use(moviesRouter);
var PORT = process.env.PORT;
server.listen(PORT, function () {
    console.log("Magic happens on ".concat(PORT, "..."));
});
