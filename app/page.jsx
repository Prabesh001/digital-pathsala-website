"use client";
import Classes from "@/components/Classes";
import ReviewGrid from "@/components/Reviews";
import VideoComponent from "@/components/VideoComponent";
import { images } from "@/public/img";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <section className="p-10 lg:px-20">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-5 md:gap-10">
            <div className="md:order-1">
              <Image
                src={images.poster}
                alt="Digital Pathsala Hero Image"
                className="w-full rounded-md"
                height={500}
                width={500}
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide">
                MODERN SKILLS | EXPERT MENTORS | INTERACTIVE LEARNING
              </p>

              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] xl:text-[48px] leading-tight font-bold">
                Empowering Minds, Unlocking Potential
              </h1>

              <p className="text-gray-600">
                Live classes on <strong>Google Meet</strong>, free certificates,
                daily recorded sessions, and lifetime mentorship & support.
              </p>

              <div className="mt-6 flex flex-col lg:flex-row gap-3">
                <button className="px-4 bg-gray-200 hover:bg-gray-300 flex items-center gap-2 transition-colors rounded-md py-3">
                  <FaBookOpen /> Explore Courses
                </button>
                <button
                  onClick={() => router.push("/enroll")}
                  className="px-4 bg-green-500 hover:bg-green-400 flex items-center gap-2 text-white transition-colors rounded-md py-3"
                >
                  Enroll Now
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoComponent />

      <Classes />

      <ReviewGrid />
    </>
  );
};

export default Home;
