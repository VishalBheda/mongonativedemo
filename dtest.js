const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

(async ()=>{
    try {
        await client.connect()
    } catch (e) {
        console.log("Error in connection")
        console.log(e)
    }

    const database = client.db("hellaro")
    const collection = database.collection("garba")

    const result = await collection.insertOne({
        "me": "E haaalo..."
    })

    const indexResult = await collection.createIndex({"me": 1},{unique: true})
    console.log("No of insert data : " + JSON.stringify(indexResult))




})();