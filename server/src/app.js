import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
// Allow Multiple Origins
// app.use(cors({origin : allowedOrigins, Credential:true}))  //OR
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

export {app}