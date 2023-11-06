import React, { useState, useEffect } from 'react';


function Energy({ feedId, unit }) {
  const [lastNumber, setLastNumber] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://emoncms.org/feed/value.json?id=${feedId}&apikey=d9d1aa5a33ecc6b9dd62be2f3524fe98`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLastNumber(data);
        console.log("Found Number:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [feedId]);

  return (
    <div
      style={{
        fontSize: "60px",
        color: "#001eff",
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      {lastNumber !== null ? lastNumber + unit : "Loading..."}
    </div>
  );
}

export default Energy;