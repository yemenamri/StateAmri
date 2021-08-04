import React, { useEffect, useState } from "react";

const IntervalExample = () => {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="App">
        <header >
          {seconds} Seconds Have Elapsed.
        </header>
      </div>
    );
  };
  
  export default IntervalExample;