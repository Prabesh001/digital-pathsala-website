"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialHandle from "./SocialHandle";
import { FaPhone, FaRegEnvelope, FaWhatsapp, FaX } from "react-icons/fa6";
import { images } from "@/public/img";
import { usePathname } from "next/navigation";

const Sidebar = ({ onClick, showSidebar }) => {
  const [selectedIndex, setSelectedIndex] = useState("home");

  const pathname = usePathname();

  useEffect(() => {
    const myPath = pathname.replace("/", " ").trim();
    setSelectedIndex(myPath ? myPath.replaceAll("-"," ") : "home");
  }, [pathname]);

  console.log(selectedIndex);

  const options = [
    "home",
    "about us",
    "voice of students",
    "gallery",
    "blogs",
    "events",
    "contact us",
  ];
  useEffect(() => {
    const closeSidebar = (event) => {
      const side = document.querySelector(".drawer");
      if (side && !side.contains(event.target)) {
        onClick();
      }
    };

    if (showSidebar) {
      document.body.classList.add("overflow-hidden"); // Prevent scrolling
      document.addEventListener("click", closeSidebar);
    } else {
      document.body.classList.remove("overflow-hidden"); // Restore scrolling
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("click", closeSidebar);
    };
  }, [showSidebar, onClick]);

  return (
    <div
      className={`${
        showSidebar
          ? "fixed inset-0 bg-[#0a0a0a70] z-[100]"
          : "bg-transparent z-0"
      } transition-colors duration-300`}
    >
      <div
        id="drawer"
        className={`z-[101] drawer fixed top-0 left-0 h-screen p-6 space-y-10 overflow-y-auto transition-transform duration-300 bg-white w-80 transform-none ${
          showSidebar ? "translate-x-0" : "-translate-x-[500px]"
        }`}
        aria-labelledby="drawer-label"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex justify-between">
          <button
            type="button"
            aria-label="Close menu"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
            onClick={onClick}
          >
            <FaX size={15} />
          </button>

          <Link href="/">
            <Image
              src={images.logo}
              className="w-[230px]"
              alt="Digital Pathsala"
              width={250}
              height={100}
            />
          </Link>
        </div>

        <ul className="space-y-4 text-lg">
          {options.map((item) => (
            <li key={item}>
              <Link onClick={(prev) => showSidebar(!prev)}
                href={item === "home" ? "/" : item.replaceAll(" ", "-")}
                className={`capitalize hover:text-red-600 font-sans ${
                  item === selectedIndex ? "text-red-600" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-lg space-y-2 border-t border-gray-300 pt-2">
          <SocialHandle />
          <div className="space-x-2">
            <Link href="#" className="flex items-center gap-x-2">
              <FaWhatsapp size={21} />
              9862130505
            </Link>
            <Link href="#" className="flex items-end gap-x-2">
              <FaPhone size={18} />
              025-575163
            </Link>
          </div>
          <div>
            <Link
              className="flex items-center gap-x-2"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com"
              target="_blank"
            >
              <FaRegEnvelope />
              example@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
