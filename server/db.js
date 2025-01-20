import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

async function connectToDatabase() {
  try {
    await client.connect()
    console.log("Connected to MongoDB")
    return client.db() // You can specify a database name here if needed
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
    process.exit(1)
  }
}

export default connectToDatabase