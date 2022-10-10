import React from "react";
import MeetUpDetail from "../components/meetups/MeetUpDetail";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import Head from "next/head";
const MeetUpDetails = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetUpDetail
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        image={props.meetupData.image}
      />
    </React.Fragment>
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://tonyandy5630:20112001Tu@cluster0.nm3nnu4.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;

  try {
    const client = await MongoClient.connect(
      "mongodb+srv://tonyandy5630:20112001Tu@cluster0.nm3nnu4.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const selectedMeetup = await meetupCollection.findOne({
      _id: ObjectId(meetupId),
    });

    client.close();

    return {
      props: {
        meetupData: {
          title: selectedMeetup.title,
          image: selectedMeetup.image,
          address: selectedMeetup.address,
          description: selectedMeetup.description,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default MeetUpDetails;
