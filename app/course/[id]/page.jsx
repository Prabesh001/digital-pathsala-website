"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaCirclePlay,
  FaRegCircleCheck,
  FaRegClock,
  FaRegCommentDots,
  FaRegSquareCheck,
  FaWallet,
} from "react-icons/fa6";
import { enquiryForm, requirements } from "@/utils/formData";
import { toast, ToastContainer } from "react-toastify";

const CourseDetail = () => {
  const { id } = useParams(); // ✅ Extract id correctly
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchCourseData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/courses/${id}`);
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setCourse(data);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Failed to load course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      course: course?.name,
      classGroupId: "",
      fullname: "",
      address: "",
      email: "",
      qualification: "",
      courseType: "Online",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to create student");
      }
      toast.success("Form submitted sucessfully!");
    } catch (error) {
      console.log(error);
      toast.error(`Form submission Failed. Please check your info carefully!`);
    }
  };

  if (loading) return <p className="text-center py-10">Loading course...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white">
        <ToastContainer />
        <div className="container px-12">
          <div className="md:flex gap-10 space-y-5 items-center justify-between py-10">
            <div className="relative z-0 md:order-1 flex justify-center">
              <Image
                src={course?.image_url || "/fallback-image.jpg"}
                alt={course?.name || "Course Image"}
                width={400}
                height={300}
                className="h-[220px] z-[-10] object-contain rounded-lg"
              />
            </div>

            <div className="space-y-5">
              <h1 className="text-3xl md:text-5xl text-white leading-tight">
                {course?.name} Course
              </h1>
              <h2 className="text-xl font-normal">Learn {course?.name}</h2>
              <h3 className="text-base font-light">
                Join beginner-friendly {course?.name} course.
              </h3>

              <div className="flex gap-8 text-lg flex-wrap">
                <div className="flex items-center gap-2">
                  <FaRegClock />
                  Duration: {course?.duration}
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <FaWallet />
                    <span className="text-green-400">
                      Fee: Rs.{course?.price} /-
                    </span>
                  </div>
                  {course?.prevprice && (
                    <div className="text-orange-600 line-through">
                      {course.prevprice} /-
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <Link
                  href={course?.demo_video_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white rounded-full p-1 pr-4"
                >
                  <FaCirclePlay size={36} />
                  <span className="text-sm font-semibold uppercase">
                    Watch Demo
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-5">
        <div className="w-[90%] mx-auto">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-5">
              <h3 className="text-2xl font-bold">
                Digital Pathsala {course?.name} Training in Nepal
              </h3>
              <p className="text-gray-600">
                Digital Pathsala’s {course?.name} Training in Nepal is a highly
                popular course...
              </p>

              {/* What will you learn? */}
              <h5 className="text-xl font-semibold mb-4">
                What will you learn?
              </h5>
              <div className="flex flex-col gap-4">
                {course?.skills_acquired?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaRegSquareCheck />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <h5 className="text-xl font-semibold mb-4">Requirements</h5>
              <div className="flex flex-col gap-4">
                {requirements.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaRegCircleCheck />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="md:col-span-5 z-10">
              <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg sticky top-24">
                <h5 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  Quick Enquiry <FaRegCommentDots />
                </h5>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block mb-2">Course</label>
                    <input
                      {...register("course")}
                      defaultValue={course?.name}
                      className="w-full focus:outline-blue-500 p-2 border border-gray-400 rounded"
                      readOnly
                    />
                  </div>

                  <div>
                    <h6 className="mb-2 font-semibold">
                      Course Type <span className="text-red-500">*</span>
                    </h6>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          {...register("courseType")}
                          type="radio"
                          value="Online"
                          className="form-radio"
                        />
                        Online
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          {...register("courseType")}
                          type="radio"
                          value="Offline"
                          className="form-radio"
                        />
                        Offline
                      </label>
                    </div>
                  </div>

                  {enquiryForm?.map((item) => (
                    <div key={item.name}>
                      <label className="block mb-2">
                        {item.label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register(item.name)}
                        placeholder={item.placeholder}
                        className="w-full p-2 border focus:outline-blue-500 border-gray-400 rounded"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block mb-2">Message</label>
                    <textarea
                      placeholder="Enter your remarks!"
                      defaultValue={`I am interested in ${
                        course?.name || "this"
                      } class.`}
                      {...register("message")}
                      className="w-full min-h-10 p-2 border focus:outline-blue-500 border-gray-400 rounded"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Submit Enquiry <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
