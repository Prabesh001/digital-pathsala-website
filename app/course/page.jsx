"use client";
import CourseGrid from "@/components/CourseGrid";

const Courses = () => {
  return (
    <>
      <div className=" p-4 sm:p-10">
        <div className="flex justify-between items-center">
          <div className="md:w-[50%]">
            <h1 className="text-2xl font-bold">
              Start Learning: Popular IT Courses
            </h1>
            <p className="text-gray-600 mt-2">
              Build your expertise in high-demand IT fields and secure a
              successful career in today’s tech-driven era
            </p>
          </div>
        </div>
      </div>
      <CourseGrid />
    </>
  );
};

export default Courses;
