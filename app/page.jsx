"use client";
import Classes from "@/components/Classes";
import ReviewGrid from "@/components/Reviews";
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

      <div className="counter-text bg-gray-800 flex justify-around items-center  py-16 relative">
        <div className="hidden lg:block">
          <Image src={"https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/460090012_384318108058460_2859429638930545486_n.png?stp=dst-png_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=jKGyXvaqSBUQ7kNvgGe2_1i&_nc_oc=AdjPrmf3Jmk59eHeIizFcOTR1B6f7FwNh37hne27z9dGJfIc-JTV9XSog8n66iUTykI0JQMgxJEFxjJaA8ieumZo&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=fN_moDqGqM77W0R7NVlA9g&oh=00_AYHm9J7beNLunAdWGQDPlkMaR1BZ9Aw3lwmsOxjmk5pkEg&oe=67DBA1D6"}
          alt="Cover Photo" height={400} width={700}/>
        </div>
        <div className="relative items-center text-center">
          <p className="text-3xl  text-white mb-4">
            "Providing Quality Education at an Affordable
            <br /> Price is our motto."
          </p>
          <span className="author text-gray-300 italic">- Manish Basnet</span>
        </div>
      </div>

      <Classes />

      <ReviewGrid />
    </>
  );
};

export default Home;
