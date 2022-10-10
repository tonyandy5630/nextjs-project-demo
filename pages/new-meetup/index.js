import router, { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

const NewMeetupPage = () => {
  const route = useRouter();

  const addMeetupHandler = async (enteredMeetUpData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    route.replace("/");
  };
  return (
    <React.Fragment>
      <Head>
        <title>Meeting Points</title>
        <meta
          name='description'
          content='Create a new meet up place for your friends '
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </React.Fragment>
  );
};

export default NewMeetupPage;
