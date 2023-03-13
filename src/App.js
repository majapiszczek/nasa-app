import React, { useState } from "react";
import "./App.css";
import PictureOfTheDay from "./PictureOfTheDay";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setClicked(true);
  }

  if (clicked) {
    return <PictureOfTheDay />;
  } else {
    return (
      <div className="App">
        <div className="main">
          <h1>Click the button to see astronomy picture of the day!</h1>
          <button onClick={handleClick}>Click me</button>
        </div>
      </div>
    );
  }
}

export default App;
