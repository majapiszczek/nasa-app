import React, { useState } from "react";

export default function PictureOfTheDay() {
  const [loaded, setLoaded] = useState(false);
  // const apiKey = "sDb8iiEZI57VCsfkNMl0Gk8XVhPtgkNQg9jxlHK1";
  // const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  function getPicture() {
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="PictureOfTheDay">
        <h2>udało się</h2>
      </div>
    );
  } else {
    getPicture();
  }
}
