import { useState } from "react";
import Sale from "../assets/salepng.png"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const prevSlideHandler = () => {
    if (current === 0) {
      setCurrent(props.img.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlideHandler = () => {
    if (current === props.img.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  console.log(props);
  return (
    <div className="overflow-hidden relative flex">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {props.img.map((image) => {
          return (
            <div key={image.id} className="min-w-full">
              <img
                src={image.img}
                alt="there is an image"
                className="w-full h-full aspect-4/2 object-cover object-center"
              />
            </div>
          );
        })}
      </div>
      <div className="w-[30%] h-[35%] absolute top-0 right-0">
        <img src={Sale} alt="there is an image" />
      </div>
      {/* carousel */}
      <div className="border-5 z-40 px-10   absolute flex h-full w-full justify-between text-2xl  text-white">
        <button
          className="cursor-pointer hover:text-gray-300"
          onClick={prevSlideHandler}
        >
          <FaArrowCircleLeft size={32} />
        </button>
        <button
          className="cursor-pointer  hover:text-gray-300"
          onClick={nextSlideHandler}
        >
          <FaArrowCircleRight size={32} />
        </button>
      </div>
    </div>
  );
}
