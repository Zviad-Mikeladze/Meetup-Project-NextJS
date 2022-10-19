import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList.js";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://zviadipf:EsCAPEhb609hb@cluster0.zn3sqal.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
