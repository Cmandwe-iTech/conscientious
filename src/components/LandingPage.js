import React from "react";
import "./landing.css";
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate()
  return (
    <div className="landing">
      <nav className="navbar">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" onClick={()=>navigate("/login")}>
            LogIn
          </button>
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>navigate("/signup")}>
            SignUp
          </button>
        </form>
      </nav>
      <div className="main-page">
        <img src={logo} alt="lg"/>
        <h1><i>Welcome To Recipe World</i></h1>
      </div>
    </div>
  );
}

export default LandingPage;
