import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
// import mongoose from 'mongoose';
// import config from './config.js';

const PORT = process.env.PORT || 8000

const app = express();

// Allow Multiple Origins
const allowedOrigins = ['http://localhost:5173']

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin : allowedOrigins, Credential:true}))

app.get('/',(req,res)=>res.send("API is Working"))



app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});