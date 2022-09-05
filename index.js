const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://blog-post:2SsoO5tbXLlGn594@cluster0.79xvt8g.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
await client.connect.db("blogs")
    }
    finally {
        // await client.close();
     }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Blog port running  ${port}`)
});

  //2SsoO5tbXLlGn594
  //blog-post