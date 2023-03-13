import React from "react";

export default function PicturePage(props) {
  let pictureData = {
    date: props.data.date,
    copyright: props.data.copyright,
    paragraph: props.data.explanation,
    title: props.data.title,
    imgUrl: props.data.url,
  };

  return (
    <div>
      <p>{pictureData.date}</p>
      <h3>Today's astronomy picture is..</h3>
      <h2>{pictureData.title}</h2>
      <img src={pictureData.imgUrl} alt={pictureData.title} />
      <p>by {pictureData.copyright}</p>
      <p>{pictureData.paragraph}</p>
    </div>
  );
}
