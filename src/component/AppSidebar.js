import React from "react";
import { Link } from "react-router-dom";
import "../css/AppSidebar/AppSidebar.css";
import { RoutesLinks } from "../Routes/RoutesLinks";

export const AppSidebar = () => {
  return (
    <div className="sidebar">
      <h1>M.Ali Yousaf</h1>
      {RoutesLinks.map(({ to, name, icons, id }) => {
        return (
          <div key={id} className="sidebarcontent">
            <i className={icons}></i>
            <Link to={to} name={name} className="RouteLinks">
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
