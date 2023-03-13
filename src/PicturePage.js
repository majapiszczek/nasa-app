import React from "react";
import "./PicturePage.css";

export default function PicturePage(props) {
  let pictureData = {
    date: props.data.date,
    copyright: props.data.copyright,
    paragraph: props.data.explanation,
    title: props.data.title,
    imgUrl: props.data.url,
  };

  return (
    <div className="PicturePage">
      <div className="content">
        <p>{pictureData.date}</p>
        <h3>Today's astronomy picture is..</h3>
        <h2>{pictureData.title}</h2>
        <div className="picture">
          <a href={pictureData.imgUrl} target="_blank" rel="noreferrer">
            <img src={pictureData.imgUrl} alt={pictureData.title} />
          </a>
          <p>by {pictureData.copyright}</p>
        </div>
        <p className="description">{pictureData.paragraph}</p>
      </div>
    </div>
  );
}
