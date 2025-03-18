import Image from "next/image";
import Link from "next/link";

import { images } from "@/public/img";
import { itSupport, paymentGateway, quickLinks } from "@/utils/data";
import SocialHandle from "./SocialHandle";
import PaymentSection from "./PaymentSection";

const Footer = () => {
  return (
    <footer id="aboutus" className="py-10 overflow-hidden px-10 border-t border-gray-300 bg-[#61927a1f]">
      <div>
        <div className="grid md:grid-cols-2  lg:grid-cols-12 gap-5 gap-x-12  border-b border-gray-400 pb-5">
         
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

          <PaymentSection />

          {/* Support Section */}
          <div className="space-y-2 lg:col-span-3">
            <h6 className="text-xl font-bold">Digital Pathsala Support</h6>
            {itSupport.map((section, index) => (
              <div key={index} className="flex flex-col">
                <strong>{section.title}</strong>
                {section.links.map((link) => (
                  <span key={link.app} className="flex flex-wrap gap-1 items-center">
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
