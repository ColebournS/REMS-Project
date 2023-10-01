import EnergyMonitor from "./Charts/EnergyMonitor";
import React, { useEffect, useState } from "react";

function App() {
  const [lastNumber, setLastNumber] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://emoncms.org/feed/value.json?id=486007&apikey=0345fe6c9c267a5f1c420397fbb3ed1a")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an object with a 'value' property
        setLastNumber(data.value);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
          textAlign: "center",
          fontSize: "24px",
          color: "white",
        }}
      >
        Last Number from API: {lastNumber !== null ? lastNumber : "Loading..."}
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
