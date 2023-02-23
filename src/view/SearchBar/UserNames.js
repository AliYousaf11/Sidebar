import React from "react";
import "./Index.css";
const UserNames = ({ UserData }) => {
  return (
    <div>
      {UserData.map((element, index) => {
        return (
          <div key={index} className="userName">
            <p>{element.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserNames;
