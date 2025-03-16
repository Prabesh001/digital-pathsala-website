import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa6";

const Classes = () => {
  // const courses = [
  //   {
  //     id: 1,
  //     title: "Web Design Course",
  //     href: "https://codeit.com.np/course/web-design-course",
  //     imageSrc: "https://codeit.com.np/storage/01JJRA9TM148GC7YW7VK2NT3Q0.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 2,
  //     title: "UI/UX Certification",
  //     href: "https://codeit.com.np/course/uiux-certification",
  //     imageSrc: "https://codeit.com.np/storage/01JJRACXKAFF46V2VBN8CPXFTW.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 3,
  //     title: "Web Design Course",
  //     href: "https://codeit.com.np/course/web-design-course",
  //     imageSrc: "https://codeit.com.np/storage/01JJRA9TM148GC7YW7VK2NT3Q0.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 4,
  //     title: "UI/UX Certification",
  //     href: "https://codeit.com.np/course/uiux-certification",
  //     imageSrc: "https://codeit.com.np/storage/01JJRACXKAFF46V2VBN8CPXFTW.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 5,
  //     title: "Web Design Course",
  //     href: "https://codeit.com.np/course/web-design-course",
  //     imageSrc: "https://codeit.com.np/storage/01JJRA9TM148GC7YW7VK2NT3Q0.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 6,
  //     title: "UI/UX Certification",
  //     href: "https://codeit.com.np/course/uiux-certification",
  //     imageSrc: "https://codeit.com.np/storage/01JJRACXKAFF46V2VBN8CPXFTW.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 7,
  //     title: "Web Design Course",
  //     href: "https://codeit.com.np/course/web-design-course",
  //     imageSrc: "https://codeit.com.np/storage/01JJRA9TM148GC7YW7VK2NT3Q0.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 8,
  //     title: "UI/UX Certification",
  //     href: "https://codeit.com.np/course/uiux-certification",
  //     imageSrc: "https://codeit.com.np/storage/01JJRACXKAFF46V2VBN8CPXFTW.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  //   {
  //     id: 9,
  //     title: "UI/UX Certification",
  //     href: "https://codeit.com.np/course/uiux-certification",
  //     imageSrc: "https://codeit.com.np/storage/01JJRACXKAFF46V2VBN8CPXFTW.avif",
  //     duration: "14 Days | 1.5 Hours per Day",
  //     price: "999",
  //     rating: "5",
  //   },
  // ];

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the limit or leave it out to use the default 10
    const limit = 9;
    fetch(`/api/courses?limit=${limit}`)
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
    <section className="mx-auto p-10">
      <div className="container space-y-5">
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
                  <strong className="text-green-600">
                    Rs.{course.price}/-
                  </strong>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center lg:hidden mb-5">
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

export default Classes;
