"use client";
import React from "react";
import Image from "next/image";
import useFetch from "@/utils/useFetch";
import { FaArrowRight } from "react-icons/fa6";

const GalleryItem = ({ image, title }) => {
  return (
    <div className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md">
      <Image
        src={image}
        alt={title}
        title={title}
        width={500}
        height={300}
        className="w-full h-auto transition-all duration-500 hover:scale-110 rounded-lg"
        priority={false}
      />
    </div>
  );
};

const GallerySection = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/gallery"
  );

  return (
    <div className="p-4 sm:p-10 flex flex-col gap-y-1">
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-red-600">
            Photographs of Our Story
          </h1>
          <p className="text-gray-600 mt-2">
            Check out the highlights that define who we are.
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-600 mt-4">Loading...</p>
        )}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {data?.map((item) => (
            <GalleryItem
              key={item._id}
              image={item.image_url}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <a
          href="https://www.facebook.com/digitalpathshala999/photos"
          className="bg-green-600 flex items-center gap-1 w-max hover:bg-green-700 mt-5 text-white px-2 py-3 rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default GallerySection;
