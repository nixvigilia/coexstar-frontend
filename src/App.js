import React from "react";
import MyContextProvider from "./contexts/MyContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Navbar />
      </Router>
      <Home />
    </MyContextProvider>
  );
}

export default App;
