import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(5500,()=>{
    console.log("server is running ",PORT);
})

