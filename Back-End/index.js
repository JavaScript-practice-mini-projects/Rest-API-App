const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hi')
})









const uri = "mongodb+srv://firsttry:habib02@cluster0.ddj84.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("Fake"); // Replace "products" with your database name
    const collection = db.collection("Products"); // Replace "items" with your collection name

    // Route to get data from MongoDB
    app.get('/data', async (req, res) => {
      try {
        const items = await collection.find().toArray(); // Fetch all documents
        res.status(200).json(items); // Send data to client
      } catch (error) {
        res.status(500).send({ error: "Error fetching data" });
      }
    });

    // Start the server
    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
    })
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

run().catch(console.dir);











/**
 
 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

*/