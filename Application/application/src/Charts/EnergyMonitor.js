import React from "react";

function EnergyMonitor({ feedId }) {
  return (
    <iframe
      style={{
        width: "700px",
        height: "400px",
        border: "0",
        scrolling: "yes",
        marginHeight: "0",
        marginWidth: "0",
      }}
      title="graph"
      src={`https://emoncms.org/vis/realtime?feedid=${feedId}&colour=001eff&colourbg=000000&kw=0&embed=1&apikey=d9d1aa5a33ecc6b9dd62be2f3524fe98`}
    ></iframe>
  );
}

export default EnergyMonitor;
