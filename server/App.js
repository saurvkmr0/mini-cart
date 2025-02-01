import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from 'cors';
import connectToDatabase from "./config/db.js"
import usersRoute from "./src/routes/usersRoute.js"


const app = express()
const PORT = process.env.PORT || 4000

connectToDatabase().then(()=>{
  app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`);
  })
  app.use(cors());
  app.use(express.json());
  app.use('/api',usersRoute)
})
.catch((error)=>{
  console.log(`failed to connect to db ${error}`);
})

// // Middleware
// app.use(express.json())



