import React from "react";
import "./Index.css";

const DisplayUsers = ({ users, userVisited, usersPerPage }) => {
  return (
    <div>
      {users.slice(userVisited, userVisited + usersPerPage).map((user) => {
        return (
          <table className="user">
            <tr>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
              <p>ConPassword: {user.confirmPassword}</p>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
