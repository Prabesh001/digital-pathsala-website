import { images } from "@/public/img";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-[#212529] p-10">
      <div >
        <div className="grid md:grid-cols-[minmax(280px,1fr)_1fr] gap-16 items-center justify-center">
          <div className="w-full">
            <div className="rounded-md relative aspect-video">
              <Image
                src={images.videoBg}
                height={800}
                width={800}
                alt="Video Bg"
                className="h-full w-full scale-x-[1.06] scale-y-[1.1] absolute z-0"
              />
              <VideoComp url="https://www.youtube.com/embed/jMsDsUoBd70?si=C6k9P00-piXBTF3r" />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full text-center">
            <h1 className="text-white font-[500] text-[24px] xl:ml-2 md:text-[26px] lg:text-[30px] xl:text-[32px] flex flex-col">
              <div>
                <span className="relative ml-5 md:ml-0">
                  Get 12 top IT Courses{" "}
                  <img
                    src="https://codeit.com.np/asset/img/quote.png"
                    className="absolute -left-10 -top-3 w-[30px]"
                    alt="Quote"
                  />
                </span>{" "}
                for just{" "}
                <span className="relative mr-5 md:mr-0">
                  Rs. 2499.
                  <img
                    src="https://codeit.com.np/asset/img/back_quote.png"
                    className="absolute -right-8 -top-3 w-[30px]"
                    alt="Quote"
                  />
                </span>
              </div>
              <div>
                <a
                  className="text-sm text-nowrap text-blue-500 ml-5" target="_blank"
                  href="https://class.digitalpathshalanepal.com/dpbrochure.pdf"
                >
                  {" "}
                  Learn more
                  
                </a>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoComp = ({url}) => {
  return (
    <iframe
      className="absolute z-40 rounded-md overflow-hidden border-0"
      width="100%"
      height="100%"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};
export default VideoSection;

