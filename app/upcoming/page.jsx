"use client";
import useFetch from "@/utils/useFetch";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa6";

const Classes = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/courses",
    9
  );

  const course = [
    {
      _id: "67d659de00a283c7d6eb9939",
      name: "Web Development Bootcamp",
      image_url:
        "https://scontent.fbir4-1.fna.fbcdn.net/v/t39.30808-6/484938485_122112185636795638_4683801440910211998_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J0GByVTmJ6oQ7kNvgE4qyER&_nc_oc=AdhTPYulkRwZ25Ndw0WarWfxyVn7tBDuM3HvAYXIf4nh2kfx2bl7jhExaK74xkvyGmjJaOxDxzPHlR9oDc2y7ChM&_nc_zt=23&_nc_ht=scontent.fbir4-1.fna&_nc_gid=Jo709pNp7BhFQqdEvt6Q_g&oh=00_AYFbiFaXHNu20EYIiIJNtaxKzP8p-fSqqDAib4OG_TI8Xg&oe=67DD8E3C",
      duration: "75 Days",
      rating: 5,
      price: 1499,
    },
  ];

  return (
    <section className="mx-auto p-4 sm:p-10">
      <div className="space-y-5">
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

          <div className="hidden lg:block">
            <Link
              href="/course"
              className="px-4 bg-green-500 hover:bg-green-600 flex items-center gap-1 text-white transition-colors rounded-md py-2"
            >
              View All <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
          {course?.map((course, index) => (
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

        <div className="text-center w-fit lg:hidden mb-5">
          <Link
            href="/course"
            className="px-4 bg-green-500 hover:bg-green-600 flex items-center gap-1 text-white transition-colors rounded-md py-2"
          >
            View All <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Class = () => {
  return (
    <a
      key={course._id}
      href={`http://localhost:3000/course/${course._id}`}
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
  );
};

export default Classes;
