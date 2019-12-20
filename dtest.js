const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

(async ()=>{
    await client.connect()
    const database = client.db("hellaro")
    const collection = database.collection("garba")
    collection.insertOne({
        "me": "E haaalo..."
    })
})();