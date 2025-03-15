"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

const CourseGrid = ({limit}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the limit or leave it out to use the default 10
    fetch(`/api/courses?${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);
  return (
    <div className="px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
        {courses.map((course, index) => (
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
                <strong className="text-green-600">Rs.{course.price}/-</strong>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
