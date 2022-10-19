//backend data sent to database
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { e, title, imagaddres, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://zviadipf:EsCAPEhb609hb@cluster0.zn3sqal.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Inserted" });
  }
}

export default handler;
