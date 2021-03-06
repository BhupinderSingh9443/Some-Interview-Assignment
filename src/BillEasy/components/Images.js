import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Image } from "antd";
import Mocky from "../axios/Mocky";
import "../styles/style.css";

const Images = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await Mocky.get("/5ecb5c353000008f00ddd5a0");
    setImages(response.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const renderImages = () =>
    images.map((image) => (
      <div className="margin" key={image.id}>
        <Image
          alt="No-Image"
          src={image.urls.regular}
          width={200}
          className="border-1"
        ></Image>
      </div>
    ));

  if (!images.length) {
    return (
      <div className="Loader">
        <Spin />
      </div>
    );
  }

  return <div className="flex-container">{renderImages()}</div>;
};

export default Images;
