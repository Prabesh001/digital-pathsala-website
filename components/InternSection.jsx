import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "@/utils/useFetch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

export default function Carousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536, // For 2xl screens
        settings: {
          slidesToShow: 4, // Show 4 slides on 2xl screens
        },
      },
      {
        breakpoint: 1280, // For xl screens
        settings: {
          slidesToShow: 3, // Show 3 slides on xl screens
        },
      },
      {
        breakpoint: 1024, // For lg screens
        settings: {
          slidesToShow: 2, // Show 2 slides on lg screens
        },
      },
      {
        breakpoint: 640, // For sm screens
        settings: {
          slidesToShow: 1, // Show 1 slide on sm screens
        },
      },
    ],
  };

  const { data, loading, error } = useFetch("http://localhost:3000/api/intern");

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading data</p>;

  return (
    <>
      <div className="m-5 mb-0 flex justify-between items-center">
        <div className="md:w-[50%]">
          <h1 className="font-bold text-3xl">Success Stories</h1>
          <p className="text-gray-500">
            Meet our talented students who have secured prestigious internship
            opportunities.
          </p>
        </div>
      </div>
      <div className="relative py-10 w-full mx-auto"> {/* Removed max-w-5xl */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 z-10"
        >
          <FaArrowLeft />
        </button>

        <Slider ref={sliderRef} {...settings} className="mx-4">
          {data?.map((item, index) => (
            <div
              key={index}
              className="focus:scale-105 transition duration-300 focus:outline-0 rounded-lg p-2"
            >
              <img
                src={item.image_url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg" // Adjusted height for consistency
              />
            </div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}