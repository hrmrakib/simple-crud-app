const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 2468;

// middleware
app.use(cors());
app.use(express.json());

// hrmrakibs
// wLPxJ31O0vFitAxl

const uri =
  "mongodb+srv://rakibnae:eJ77rc8wm0Y7UI3C@cluster0.dmwxvyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const url = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db("usersDB").collection("users");

    app.get("/", (req, res) => {
      res.send("hello");
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      res.send(users);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
