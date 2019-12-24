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

    try {
        const result = await collection.insertOne({
            "me": "E haaalo..."
        })
    } catch (e) {
        console.log("Error in insrting data")
        console.log(e)
    }


    try {
        const indexResult = await collection.createIndex({"me": 1},{unique: true})
        console.log("No of insert data : " + JSON.stringify(indexResult))
    } catch (e) {
        console.log("Error in creating index")
        console.log(e)
    }

    try {
        const findResult = await collection.find({})
        console.log(findResult)

    } catch (e) {
        console.log("Error in finding results")
        console.log(e)
    }


})();