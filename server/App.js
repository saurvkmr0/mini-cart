import express from "express"
import dotenv from "dotenv"
import connectToDatabase from "./db.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(express.json())

// Connect to MongoDB before starting the server
connectToDatabase()
  .then((database) => {
    // You can use the database connection in your routes
    app.get("/", (req, res) => {
      res.send("Hello, MongoDB!")
    })

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error)
    process.exit(1)
  })

