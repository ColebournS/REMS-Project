import EnergyMonitor from "./Charts/EnergyMonitor";
import React from "react";

function App() {
    return (
      <div
        className="App"
        style={{ backgroundColor: "black", position: "relative" }}
      >
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