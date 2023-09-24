import EnergyMonitor from "./Charts/EnergyMonitor";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <div style={{ textAlign: "center", fontSize: "24px", paddingTop: "30px", color:"white"}}>
        Remote Energy Monitoring System
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <EnergyMonitor />
      </div>
    </div>
  );
}

export default App;
