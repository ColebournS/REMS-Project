import EnergyMonitor from "./Charts/EnergyMonitor";
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
      <div
        style={{
          fontSize: "40px",
          paddingTop: "30px",
          paddingBottom: "30px",
          marginLeft: "120px",
          color: "white",
        }}
      >
        Energy Monitoring:
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <EnergyMonitor feedId={486841} />
        <Energy feedId={486841} unit="W" />
      </div>
      <div
        style={{
          fontSize: "40px",
          paddingTop: "30px",
          paddingBottom: "30px",
          marginLeft: "120px",
          color: "white",
        }}
      >
        Environmental Monitoring:
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Energy feedId={486841} unit="C" />
        <EnergyMonitor feedId={486841} />
        <Energy feedId={488420} unit="%" />
        <EnergyMonitor feedId={486841} />
      </div>
    </div>
  );
}

export default App;
