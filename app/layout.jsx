import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Pathsala",
  description:
    "Your gateway for learning best quality education in IT field for affordable price.",
  icons: "/assets/icon.png",
  openGraph: {
    title: "Digital Pathsala",
    description: "Your app description goes here.",
    url: "https://www.digitalpathshalanepal.com/",
    siteName: "Digital Pathsala",
    images: [
      {
        url: "https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-1/481356296_498404099983193_8711123614962046513_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=r2ylmHpigTgQ7kNvgHyh5sy&_nc_oc=AdhpPk1azmhGbQm-S2i1boNKI0tf3pJ-VlUpehxOxnoAOUKUy4Jvm2hXYE89T9lOMo_Byn6TqsLfs0mOshZnZ7re&_nc_zt=24&_nc_ht=scontent.fktm19-1.fna&_nc_gid=hJt7GM1MEnHZJvQadlRZbQ&oh=00_AYHwfNXEGMdVxZ5EvYpKojhouy5lgaq6Ghz--86RNOTzug&oe=67DF475F",
        width: 1200,
        height: 630,
        alt: "Digital Pathsala Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
