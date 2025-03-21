"use client";
import useFetch from "@/utils/useFetch";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Loading from "./Loading";

const CourseGrid = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/courses"
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-4 sm:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
            {data?.map((course, index) => (
              <a
                key={course._id}
                href={`/course/${course._id}`}
                className="block border border-slate-300 rounded-lg overflow-hidden sd-box transition-shadow"
              >
                <div>
                  <Image
                    src={course.image_url}
                    alt={course?.title || "Course Title"}
                    height={500}
                    width={500}
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{course.name}</h2>
                    <div className="flex items-center gap-1">
                      (
                      <FaStar
                        color="#f1ed1c
      "
                      />
                      <span>{course.rating}</span>)
                    </div>
                  </div>
                  <p className="text-gray-600">Duration: {course.duration}</p>
                  <div className="flex gap-2">
                    <span>Online Fee:</span>
                    <strong className="text-green-600">
                      Rs.{course.price}/-
                    </strong>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CourseGrid;
