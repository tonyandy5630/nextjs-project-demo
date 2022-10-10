import MeetupList from "../components/meetups/MeetupList";

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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_DATA} />;
};

export default HomePage;
