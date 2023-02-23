import React from "react";
import Carousel from "./Carousel";
import './Index.css'
const Index = () => {
  const slides = [
    {
      id: 1,
      title: "img_1",
      url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-1.jpg",
    },
    {
      id: 2,
      title: "img_2",
      url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-2.jpg",
    },
    {
      id: 3,
      title: "img_3",
      url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-3.jpg",
    },
    {
      id: 4,
      title: "img_4",
      url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-4.jpg",
    },
    {
      id: 5,
      title: "img_5",
      url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-5.jpg",
    },
  ];
  return (
    <div className="IndexCarousel">
      <Carousel slides={slides} />
    </div>
  );
};

export default Index;
