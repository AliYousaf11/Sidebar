import React from "react";
import UserData from "./UserData.json";
import UserNames from "./UserNames";

const SearchBar = ({ data }) => {
  return (
    <div className="SearchName">
      <UserNames UserData={UserData} />

      {UserData.filter((key) => key.first_name === data).map(
        (element, index) => {
          return (
            <div key={index} className="SearchMain">
              <p>Name: {element.first_name}</p>
              <p>Title: {element.title}</p>
              <p>Email: {element.email}</p>
              <p>Gender: {element.gender}</p>
              <p>Cell No: {element.phone_number}</p>
              <p>Password: {element.password}</p>
              <p>Birthdate: {element.birthdate}</p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default SearchBar;
