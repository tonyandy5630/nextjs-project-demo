import css from "./MeetUpDetail.module.css";

function MeetUpDetail(props) {
  return (
    <section className={css.detail}>
      <img src={props.image} alt={"First meet update"} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetUpDetail;
