import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://tonyandy5630:20112001Tu@cluster0.nm3nnu4.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupCollection = db.collection("meetups");
      const result = await meetupCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default handler;
