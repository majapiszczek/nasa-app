import React, { useState } from "react";
import PicturePage from "./PicturePage";
import axios from "axios";

export default function PictureOfTheDay() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState("");

  function displayPicture(response) {
    setData(response.data);
  }

  function getPicture() {
    const apiKey = "sDb8iiEZI57VCsfkNMl0Gk8XVhPtgkNQg9jxlHK1";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    axios.get(apiUrl).then(displayPicture);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="PictureOfTheDay">
        <PicturePage data={data} />
      </div>
    );
  } else {
    getPicture();
  }
}
