import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList.js";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    addres: "Some addres 5 , 1245 City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    addres: "Some addres 55 , 126845 City A",
    description: "This is a Second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
