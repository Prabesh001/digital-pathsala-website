"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { images } from "@/public/img";
import {
  FaAngleDown,
  FaBars,
  FaGraduationCap,
  FaHouse,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${encodeURIComponent(search)}`);
    }
  };

  return (
    <section className="bg-white z-20 shadow-md" id="nav">
      <nav className=" navbar p-4 sm:px-10 sm:py-7 flex  justify-center">
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          onClick={handleSidebar}
        />

        <div className="container">
          {/* Desktop Navigation */}
          <div className="hidden md:grid grid-cols-12 lg:flex items-center gap-2 xl:gap-4 text-center">
            <div className="justify-between flex gap-4 items-end col-span-6">
              <Link href="/">
                <Image
                  className="logo"
                  src={images.logo}
                  alt="Digital Pathsala Logo"
                  width={300}
                  height={80}
                />
              </Link>

              <div>
                <button
                  className="text-2xl"
                  aria-label="Menu Bar"
                  data-drawer-target="drawer"
                  data-drawer-show="drawer"
                  aria-controls="drawer"
                  onClick={handleSidebar}
                >
                  <FaBars size={24} />
                </button>
              </div>
            </div>

            <div className="col-span-6 navsearch lg:flex-grow">
              <form onSubmit={handleSearch}>
                <div className="border-1 border-gray-300 rounded-2xl px-3 py-2 flex justify-between items-center focus:outline-2 focus:outline-blue-500">
                  <input
                    type="search"
                    name="search"
                    id="searchCourse"
                    className="outline-0  w-full"
                    placeholder="Search course by name"
                    required
                    autoComplete="off"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit" className="ml-1" id="searchIcon">
                    <FaMagnifyingGlass size={15} />
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-6 justify-between flex gap-4 items-center">
              <div className="relative w-max">
                <Link href="/upcoming" className="fw-bold w-max">
                  Upcoming Classes
                </Link>
                <div className="absolute -top-3 right-0 bg-orange-600 text-white py-[2px] px-[6px] rounded-sm text-[10px]">
                  2
                </div>
              </div>

              <Link href="/course" className="relative">
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  Courses <FaAngleDown />
                </button>
              </Link>
            </div>

            <div className="col-span-6 flex gap-4 md:gap-1 items-center justify-end">
              <div className="enroll">
                <Link
                  href="/enroll"
                  className="px-4 bg-[#E2E5E9] hover:bg-[#c1c1c1] flex items-center gap-1 duration-200 rounded-md justify-center py-2"
                >
                  Student Portal <FaGraduationCap size={22} />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/">
                  <Image
                    className="logo"
                    src={images.logo}
                    alt="Digital Pathsala Logo"
                    width={250}
                    height={100}
                  />
                </Link>
              </div>
              <div className="flex gap-5">
                <Link href="/">
                  <FaHouse size={24} color="green" />
                </Link>
                <button
                  aria-label="Menu Bar"
                  data-drawer-target="drawer"
                  data-drawer-show="drawer"
                  aria-controls="drawer"
                  onClick={handleSidebar}
                >
                  <FaBars size={24} />
                </button>
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-center gap-2 py-5">
              <div className="flex gap-2 items-center  text-[16px]">
                <div className="relative w-max">
                  <Link href="/upcoming" className="fw-bold w-max">
                    Upcoming Classes
                  </Link>
                  <div className="absolute -top-3 -right-2 bg-orange-600 text-white py-[2px] px-[6px] rounded-sm text-[10px]">
                    2
                  </div>
                </div>
              </div>

              <div className="enroll">
                <Link
                  href="/enroll"
                  className="px-4 bg-[#E2E5E9] hover:bg-[#c1c1c1] flex items-center gap-1 duration-200 rounded-md justify-center py-2"
                >
                  Student Portal <FaGraduationCap size={20} />
                </Link>
              </div>
            </div>

            <div className="navsearch">
              <form action="#">
                <div className="border-1 border-gray-300 rounded-2xl px-3 py-2 flex justify-between items-center focus:outline-2 focus:outline-blue-500">
                  <input
                    type="search"
                    name="search"
                    id="searchCourse"
                    className="outline-0  w-full"
                    placeholder="Search course by name"
                    required
                    autoComplete="off"
                  />
                  <button type="submit" id="searchIcon">
                    <FaMagnifyingGlass />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
