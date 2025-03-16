"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa6";

const Review = ({ image, name, review }) => {
  return (
    <Link
      href="https://www.facebook.com/digitalpathshala999/reviews"
      target="_blank"
    >
      <div className="flex flex-col justify-between rounded-md border border-neutral-300 bg-gray-100 p-8 shadow-sm max-w-sm">
        <div className="text-violet-500 flex gap-2">
          <FaRegStar size={18} />
          <FaRegStar size={18} />
          <FaRegStar size={18} />
          <FaRegStar size={18} />
          <FaRegStar size={18} />
        </div>

        <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-900">
          {review}
        </p>

        <div className="mt-6 flex items-center gap-6 ">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-200">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-200">
              <Image
                alt="image"
                src={image}
                width="50"
                height="50"
                className="inline-block text-transparent"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed tracking-wide text-gray-700">
              {name}
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-600">
              Student
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ReviewGrid = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const limit = 9;
    fetch(`/api/reviews?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="px-5 pt-10">
        <div className="flex justify-between items-center">
          <div className="md:w-[50%]">
            <h1 className="text-2xl font-bold">
              Here is what our Students says:
            </h1>
            <p className="text-gray-600 mt-2 flex flex-wrap gap-3">
              Reviews from our facebook page.
              <a
                className="flex gap-1 items-center text-blue-600"
                href="https://www.facebook.com/p/Digital-Pathshala-100094408225878/"
              >
                View More <FaArrowRight />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 p-5">
        {reviews.map((r) => (
          <div key={r._id} className="mb-6 break-inside-avoid">
            <Review image={r.image_url} name={r.user} review={r.review} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewGrid;
