import React from "react";
import { AppSidebar } from "../component/AppSidebar";
import { AppHeader } from "../component/AppHeader";
import { AppContent } from "../component/AppContent";
import { AppFooter } from "../component/AppFooter";
import '../css/DefaultLayout/DefaultLayout.css'

export const DefaultLayout = () => {
  return (
    <div className="defaultLayout">
      <AppSidebar />
      <div className="defaultLayout_Content">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    </div>
  );
};
