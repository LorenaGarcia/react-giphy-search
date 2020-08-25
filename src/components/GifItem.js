import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const GifItem = (image) => {
  return (
    <Link to={`/gif/${image.gif.id}`} style={{ margin: "5px" }}>
      <Image
        style={{ width: "10rem" }}
        alt={image.gif.id}
        src={image.gif.images.downsized_medium.url}
        thumbnail
      />
    </Link>
  );
};

export default GifItem;
