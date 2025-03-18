"use client";
import useFetch from "@/utils/useFetch";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const GallerySection = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/gallery",
    9
  );

  const colSpans = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  const galleryItems = data
    ? data.slice(0, 9).map((item, index) => ({
        id: item._id || index + 1,
        imageUrl: item.image_url,
        alt: item.alt || `Gallery Image ${index + 1}`,
        link:
          item.link || "https://www.facebook.com/digitalpathshala999/photos",
        colSpan: colSpans[index],
      }))
    : [];

  return (
    <section className="p-10 bg-gray-100 pt-4 justify-center">
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <div className="md:w-[50%]">
            <h1 className="text-2xl font-bold">Photographs of Our Story</h1>
            <p className="text-[#495057]">
              Check out the highlights that help define who we are.
            </p>
          </div>
          <div className="hidden lg:block">
            <a
              href="/gallery"
              className="px-4 bg-green-600 hover:bg-green-700 flex items-center gap-1 text-white duration-200 rounded-md justify-center py-2 mb-5"
            >
              View All <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} overflow-hidden rounded-lg`}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  height={500}
                  width={500}
                  className="w-full hover:scale-105 h-full duration-200 object-contain rounded-lg shadow-md"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center pt-5 lg:hidden mb-5">
          <a
            href="/gallery"
            className="px-4 w-fit bg-green-600 hover:bg-green-700 flex items-center gap-1 text-white duration-200 rounded-md justify-center py-2"
          >
            View All <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
