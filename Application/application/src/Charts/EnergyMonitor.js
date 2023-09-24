import React from "react";

function EnergyMonitor() {
    return ( <
        iframe style = {
            {
                width: "1080px",
                height: "400px",
                border: "0",
                scrolling: "yes",
                marginHeight: "0",
                marginWidth: "0",
            }
        }
        src = "https://emoncms.org/vis/realtime?feedid=486007&colour=edc240&colourbg=ffffff&kw=1&embed=1&apikey=0345fe6c9c267a5f1c420397fbb3ed1a" >
        <
        /iframe>
    );
}

export default EnergyMonitor;