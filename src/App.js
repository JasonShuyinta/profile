import { Avatar, Container, Divider } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Navbar />
      <div className="glass">
        <div className="center-align">
          <Avatar
            src="/img/Avatar.jpeg"
            alt="profile"
            style={{ width: "80px", height: "80px" }}
          />
          <div style={{textAlign:"center"}}>
            <h1>Hi! I'm Jason</h1>
            <div >
            <code>BACKEND/CLOUD DEVELOPER <img src="assets/data-server.png" alt="server" style={{width: "1rem", height: "1rem"}} /> ☁️ </code> 
            </div>
          </div>
            <Divider style={{height: "10px", width: "90%", color: "black", margin: "1rem 0"}}/>
          <div className="text-container">
            <p>
              My name is Jason and I'm a Web Developer with 3+ years of
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
