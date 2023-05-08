import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage";
import UpdateProfile from "./pages/UpdateProfile";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/edit/:id" element={<UpdateProfile />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
