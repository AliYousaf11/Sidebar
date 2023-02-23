import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./view/pages/Login";
import { Page404 } from "./view/pages/Page404";
import { Register } from "./view/pages/Register";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading data.......</p>}>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="404" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
