import { images } from "@/public/img";
import {
  FaRegEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMobileScreen,
  FaTty,
  FaViber,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export const social = [
  { site: "facebook", icon: <FaFacebook />, color: "text-blue-800" },
  { site: "instagram", icon: <FaInstagram />, color: "text-pink-500" },
  { site: "youtube", icon: <FaYoutube />, color: "text-red-500" },
  { site: "linkedin", icon: <FaLinkedinIn />, color: "text-blue-700" },
];

export const quickLinks = [
  "Home",
  "Why 14 Days?",
  "About Us",
  "Voice of Students",
  "Gallery",
  "Blogs",
  "Events",
  "Contact Us",
  "Student Portal",
];

export const paymentGateway = [
  { img: images.esewa, text: "E-sewa/Banks" },
  { img: images.smartphone, text: "Mobile Banking" },
  { img: images.bank, text: "Bank Transfer" },
  { img: images.khalti, text: "Khalti & Global IME" },
];

export const itSupport = [
  {
    title: "Chat Support",
    links: [
      { app: "whatsapp", icon: <FaWhatsapp />, value: "9812345678" },
      { app: "viber", icon: <FaViber />, value: "9812345678" },
      { app: "email", icon: <FaRegEnvelope />, value: "basnetmanish089@gmail.com" },
    ],
  },
  {
    title: "Call Support (8am - 10pm)",
    links: [
      { app: "landline", icon: <FaTty />, value: "025-588888" },
      { app: "phone", icon: <FaMobileScreen />, value: "9812345678" },
    ],
  },
  {
    title: "Sales & Marketing",
    links: [
      { app: "sales-whatsapp", icon: <FaWhatsapp />, value: "9812345678" },
      { app: "sales-viber", icon: <FaViber />, value: "9812345678" },
    ],
  },
];
