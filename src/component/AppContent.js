import { Routes, Route } from "react-router-dom";
import { RoutesPath } from "../Routes/RoutePath";
import "../css/AppContent/AppContent.css";

export const AppContent = () => {
  return (
    <div className="SidebarContent">
      <Routes>
        {RoutesPath.map(({ path, element }, index) => {
          return <Route exact path={path} element={element} key={index} />;
        })}
      </Routes>
    </div>
  );
};
