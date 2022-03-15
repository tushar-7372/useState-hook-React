import React, { useState } from "react";

// console.log(time);

function App() {
  // calls the set function every 1000 ms ie 1 s
  setInterval(set, 1000);

  // gets the current time
  let time = new Date().toLocaleTimeString();

  // useState
  const [currentTime, setTime] = useState(time);
  console.log(currentTime);

  // function that is called when the button is clicked
  function set() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={set}>Get Time</button>
    </div>
  );
}

export default App;
