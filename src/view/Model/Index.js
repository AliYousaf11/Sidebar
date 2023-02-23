import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import UserData from "../Model/Login/UserData";
// import { List } from "./List";

const Index = () => {
  const [showmodal, setShowModal] = useState(false);
  const closemodal = () => setShowModal(false);
  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)}>Login</button>
      </div>
      {showmodal && <ModalComponent closemodal={closemodal} />}

      <UserData />
      {/* <List/> */}
    </>
  );
};

export default Index;
