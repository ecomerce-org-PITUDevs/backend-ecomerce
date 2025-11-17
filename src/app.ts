import express, { Express, Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./utils/db"
import mongoose from "mongoose";

// dotenv config (.env)
dotenv.config();

// connection to DB
connectDB();

// Declaring the server
const server: Express = express();

// PORT
const port: string | number = process.env.PORT || 4000;

// cors config
server.use(cors());

// json middleware config
server.use(express.json({limit: '50mb'}));

// Test 'api/health' route
server.get('/api/health', (req:Request, res:Response) => {
    res.json({status: "ok"});
})
// Test db connection
server.get("/api/db-check", (req: Request, res: Response) => {
    const state = mongoose.connection.readyState;

    res.json({
        connected: state === 1,
        state,

    });
});

server.listen(port, () => {
    console.log(`EXPRESS SERVER: Running on http://localhost:${port}`)
})