import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(null);
  const totalVids = 4;

  const nextVideoRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    if (index < totalVids - 1) setIndex(index + 1);
    else setIndex(1);
  };

  const handleVideoLoad = () => {
    setLoadedVideos(loadedVideos + 1);
  };

  const getVideoSource = (i) => `videos/hero-${i}.mp4`;

  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="flex justify-center relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          ref={nextVideoRef}
          src={getVideoSource(index)}
          autoPlay
          loop
          muted
          id="next-video"
          onLoadedData={handleVideoLoad}
          className="absolute top-0 left-0 bottom-0 right-0 h-dvh object-cover "
        />
        <div
          onClick={handleMiniVdClick}
          className=" origin-center opacity-5 scale-50 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
        >
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer">
            <video
              ref={nextVideoRef}
              src={getVideoSource(index + 1)}
              onLoadedData={handleVideoLoad}
              loop
              //   autoPlay
              muted
              id="current-video"
              className="size-64 origin-center object-cover object-center rounded-3xl overflow-hiden"
            />
          </div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 left-5 text-blue-75 font-general">G<b>a</b>ming</h1>

    <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">Redefi<b>n</b>e</h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                Enter the Metagame Layer <br/> Unleash the Play Economy
            </p>
        </div>
    </div>
      </div>
    </section>
  );
};

export default Hero;
