import { useState } from "react";
import Card from "./Components/Card/Card";
import LoginForm from "./Components/LoginForm/LoginForm";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import RouteManager from "./Router/RouteManager";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";
function App() {

  return (
    <div className="dontLogged">
      
      <AuthProvider>
        <BrowserRouter>
          <RouteManager />
          <Navbar />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
