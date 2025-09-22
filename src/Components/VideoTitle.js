import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-6 md:px-20 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl text-white font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className=" text-black bg-white hover:opacity-60 py-1 px-3 mt-2  md:py-4 md:px-8 text-lg md:text-xl rounded-lg">
          <FontAwesomeIcon icon={faPlay} />
          Play
        </button>
        <button className="bg-gray-500 opacity-60 hidden md:inline-block text-white mx-3 p-4 px-8 text-xl rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
