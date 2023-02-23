import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import '../../css/AppHeader/AppHeader.css'
const Index = () => {
  const [showmodal, setShowModal] = useState(false);
  const closemodal = () => setShowModal(false);
  return (
    <>
      <div className="loginModal">
        <button onClick={() => setShowModal(true)} className="loginbtn">Login</button>
      </div>
      {showmodal && <ModalComponent closemodal={closemodal} />}
    </>
  );
};

export default Index;
