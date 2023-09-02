const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
    "mongodb+srv://university-admin:Jer4uSDm0N23AaAi@cluster0.a744t.mongodb.net/news-portal?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        console.log("Successfully connected to Database!");
        const newsCollection = client.db("news-portal").collection("news");
        if (req.method === "GET") {
            const news = await newsCollection.find({}).toArray();
            res.send({ Message: "Success ", status: 200, data: news });
        }
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default run;
