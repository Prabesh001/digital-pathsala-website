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
  { site: "facebook", icon: <FaFacebook />, href: "#", color: "text-blue-800" },
  {
    site: "instagram",
    icon: <FaInstagram />,
    href: "#",
    color: "text-pink-500",
  },
  { site: "youtube", icon: <FaYoutube />, href: "#", color: "text-red-500" },
  {
    site: "linkedin",
    icon: <FaLinkedinIn />,
    href: "#",
    color: "text-blue-700",
  },
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
  {
    img: images.esewa,
    text: "E-sewa",
    name: "esewa",
    qr: "https://imgs.search.brave.com/06ysxDQbdyeSbJLa8h67fxy4jJ1DL6qLECqjhkO0lnU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL2VuZHJv/aWQvcXItY29kZS9y/YXcvbWFpbi8uZ2l0/aHViL2V4YW1wbGUu/cG5n",
  },
  {
    img: images.bank,
    text: "Bank Transfer",
    name: "bank",
    qr: "https://imgs.search.brave.com/GywrOkmwaYCoQtqxI_2ll15dnZ8zLngObU2QNQtHAYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbG0u/dW1hcnlsYW5kLmVk/dS9lbG0tc3Rvcmll/cy8yMDI0L1FSQ29k/ZXMuanBn",
  },
];

export const itSupport = [
  {
    title: "Chat Support",
    links: [
      { app: "whatsapp", icon: <FaWhatsapp />, value: "9812345678" },
      { app: "viber", icon: <FaViber />, value: "9812345678" },
      {
        app: "email",
        icon: <FaRegEnvelope />,
        value: "basnetmanish089@gmail.com",
      },
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
