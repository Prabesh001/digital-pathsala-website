"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import useFetch from "@/utils/useFetch";
import { FaArrowRight, FaStar } from "react-icons/fa6";

function Review({ image, name, review }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={image} aria-label="image" /> || (
            <Avatar sx={{ bgcolor: "green" }} aria-label="profileImage">
              {name.charAt(0)}
            </Avatar>
          )
        }
        title={name}
      />
      <div className="px-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#F5C518" size={18} />
          ))}
        </div>
      <CardContent>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
}

const ReviewGrid = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/reviews",
    9
  );

  return (
    <div className="p-5 bg-gray-100">
      <div className="px-5 pt-5">
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
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 p-5">
        {data?.map((r) => (
          <div key={r._id} className="mb-6 break-inside-avoid">
            <Review image={r.image_url} name={r.user} review={r.review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewGrid;
