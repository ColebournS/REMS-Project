import React from "react";

function EnergyMonitor() {
    return ( <iframe style = {
            {
                width: "1080px",
                height: "400px",
                border: "0",
                scrolling: "yes",
                marginHeight: "10",
                marginWidth: "10",
            }
        }
        title = "graph"
        src = "https://emoncms.org/vis/realtime?feedid=486007&colour=67db88&colourbg=000000&kw=1&embed=1&apikey=0345fe6c9c267a5f1c420397fbb3ed1a" >
        </iframe>
    );
}

export default EnergyMonitor;