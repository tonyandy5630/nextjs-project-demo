import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import React from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://media.architecturaldigest.com/photos/61e048de019f04fb96929319/4:3/w_3864,h_2898,c_limit/AD0222_PRESERVATION_LALBAUGH_1.jpg",
    address: "Some address",
    description: "This is a test",
  },
  {
    id: "m2",
    title: "First Meetup",
    image:
      "https://media.architecturaldigest.com/photos/61e048de019f04fb96929319/4:3/w_3864,h_2898,c_limit/AD0222_PRESERVATION_LALBAUGH_1.jpg",
    address: "Some address",
    description: "This is a test",
  },
];

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Meeting Points</title>
        <meta name='description' content='Set a place for meeting in general' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://tonyandy5630:20112001Tu@cluster0.nm3nnu4.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
        };
      }),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }

export default HomePage;
