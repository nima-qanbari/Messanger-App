import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
//components
import Login from "./components/Login";
import Chats from "./components/Chats";

//context
import AuthContextProvider from "./Context/AuthContextProvider";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
