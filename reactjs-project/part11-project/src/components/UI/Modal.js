import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";
import React from "react";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const outCartHandler = () => {};
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Backdrop onOutCart={props.onCloseCart} />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
