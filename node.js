const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function addRegistrant() {
  try {
    await client.connect();
    const database = client.db('event_registration');
    const collection = database.collection('registrants');

    const newRegistrant = {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      event: "Tech Conference 2025"
    };

    const result = await collection.insertOne(newRegistrant);
    console.log(`New registrant added with ID: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

addRegistrant().catch(console.error);