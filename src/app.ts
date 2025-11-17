import express, { Express, Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';

// dotenv config (.env)
dotenv.config();

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

server.listen(port, () => {
    console.log(`EXPRESS SERVER: Running on http://localhost:${port}`)
})