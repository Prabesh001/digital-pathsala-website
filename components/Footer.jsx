import Image from "next/image";
import Link from "next/link";

import { images } from "@/public/img";
import { itSupport, paymentGateway, quickLinks } from "@/utils/data";
import SocialHandle from "./SocialHandle";

const Footer = () => {
  return (
    <footer className="py-10 px-10 bg-[#61927a1f]">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-5 border-b border-gray-400 pb-5">
          {/* Company Info Section */}
          <div className="space-y-2 lg:col-span-3">
            <div>
              <Image
                className="w-60"
                src={images.logo}
                alt="Digital Pathsala"
                width={200}
                height={50}
              />
            </div>
            <ul>
              <li>
                <span>025-585858 </span>,<span> 9812345678</span>
              </li>
              <li>
                <a
                  href="https://www.digitalpathshalanepal.com"
                  className="text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.digitalpathshalanepal.com
                </a>
              </li>
              <li>Itahari - 4, Sunsari</li>
              <li>
                <span className="font-bold">Reg No.</span>11757/6371/04
              </li>
              <li>
                <span className="font-bold">PAN No.</span>602345817
              </li>
            </ul>
            <div className="text-xl">
              <strong className="text-lg">We are on</strong>
              <SocialHandle />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-2 lg:col-span-2 ">
            <h6 className="text-xl font-bold">Quick Links</h6>
            <ul>
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods Section */}
          <div className="space-y-2 lg:col-span-4">
            <h6 className="text-xl font-bold">We Accept</h6>
            <div className="grid grid-cols-3 gap-2">
              {paymentGateway.map((method, index) => (
                <div
                  key={index}
                  className={`p-2 bg-white border border-gray-300 flex flex-col gap-2 items-center rounded-md ${
                    index === 0 || index === 3 ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src={method.img}
                    alt={method.text}
                    width={300}
                    height={40}
                    className="h-[20px] object-contain"
                  />
                  <h2 className="text-xs font-normal">{method.text}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-2 lg:col-span-3">
            <h6 className="text-xl font-bold">Digital Pathsala Support</h6>
            {itSupport.map((section, index) => (
              <div key={index} className="flex flex-col">
                <strong>{section.title}</strong>
                {section.links.map((link) => (
                  <span key={link.app} className="flex gap-1 text-nowrap items-center">
                    {link.icon}
                    <span className="capitalize">
                      {link.app.replace("-", " ")}
                    </span>
                    : {link.value}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-between items-center py-5">
          <div>
            <small>Copyright © 2025 Digital Pathsala.</small>
          </div>
          <div>
            <small>
              <Link href="#">Terms & Conditions |</Link>
            </small>
            <small>
              <Link href="#">Privacy Policy</Link>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
