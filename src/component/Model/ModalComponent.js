import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Login from "./Login/Login";

const ModalComponent = ({ closemodal }) => {
  return ReactDOM.createPortal(
    <>
      <div className="ModalWrapper" onClick={closemodal}></div>
      <div className="Modal">
        <Login closemodal={closemodal}/>
      </div>
    </>,
    document.querySelector(".ModalInIndex")
  );
};
export default ModalComponent;
