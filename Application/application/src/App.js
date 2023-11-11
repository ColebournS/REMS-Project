import EnergyMonitor from "./Charts/EnergyMonitor";
import Energy from "./Components/Energy";
import logo from "./360.png"; 
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          position: "absolute",
          top: 30,
          left: 80,
          width: "150px",
          height: "auto",
        }}
      />

      <div
        style={{
          textAlign: "center",
          fontSize: "70px",
          paddingTop: "30px",
          paddingBottom: "30px",
          color: "white",
        }}
      >
        Remote Energy Monitoring System
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "500px 1fr",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "50px",
          marginLeft: "50px",
        }}
      >
        <div
          style={{
            padding: "50px",
            color: "white",
            fontSize: "50px",
          }}
        >
          {/* Content of the first column */}
          Power Monitoring:
        </div>
        <div
          style={{
            padding: "5px",
            margin: "20px",
            display: "grid",
            gridTemplateRows: "auto 1fr",
            border: "2px solid blue",
            borderRadius: "10px",
          }}
        >
          {/* Content of the second column */}
          <div
            style={{
              gridTemplateColumns: "500px 1fr",
              display: "flex",
              justifyContent: "center",
              padding: "5px",
              color: "white",
              fontSize: "30px",
            }}
          >
            Power Usage:
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div style={{ padding: "10px" }}>
                {/* Content of the first column */}
                <EnergyMonitor feedId={486007} />
              </div>
              <div style={{ padding: "10px" }}>
                {/* Content of the second column */}
                <Energy feedId={486007} unit="W" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "500px 1fr 1fr",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "50px",
          marginLeft: "50px",
        }}
      >
        <div style={{ padding: "50px", color: "white", fontSize: "50px" }}>
          {/* Content of the first column */}
          Environmental Monitoring:
        </div>
        <div
          style={{
            padding: "5px",
            margin: "20px",
            display: "grid",
            gridTemplateRows: "auto 1fr",
            border: "2px solid blue",
            borderRadius: "10px",
          }}
        >
          {/* Content of the second column */}
          <div
            style={{
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontSize: "30px",
            }}
          >
            Temperature:
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div style={{ padding: "10px" }}>
                {/* Content of the first column */}
                <EnergyMonitor feedId={486841} />
              </div>
              <div style={{ padding: "10px" }}>
                {/* Content of the second column */}
                <Energy feedId={486841} unit="C" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "5px",
            margin: "20px",
            display: "grid",
            gridTemplateRows: "auto 1fr",
            border: "2px solid blue",
            borderRadius: "10px",
          }}
        >
          {/* Content of the second column */}
          <div
            style={{
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontSize: "30px",
            }}
          >
            Humidity:
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div style={{ padding: "10px" }}>
                {/* Content of the first column */}
                <EnergyMonitor feedId={488420} />
              </div>
              <div style={{ padding: "10px" }}>
                {/* Content of the second column */}
                <Energy feedId={488420} unit="%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
