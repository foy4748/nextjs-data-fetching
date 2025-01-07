import { MongoClient, ServerApiVersion } from "mongodb"

export const collectionNames = {
    TEST_USER: "test_user",
    PRACTICE_DATA: "practice_data"
}


function dbConnect(collectionName) {
    const uri = process.env.MONGODB_URI

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName)
}

export default dbConnect;
