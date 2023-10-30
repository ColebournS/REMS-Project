import EnergyMonitor from "./Charts/EnergyMonitor";
import React, { useEffect, useState } from "react";
import Energy from "./Components/Energy";
import logo from "./360.png"; 
function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "black", position: "relative" }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          width: "300px",
          height: "auto",
        }}
      />

      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          paddingTop: "30px",
          paddingBottom: "30px",
          color: "white",
        }}
      >
        Remote Energy Monitoring System
      </div>

      <Energy />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
        }}
      >
        <EnergyMonitor />
      </div>
    </div>
  );
}

export default App;
