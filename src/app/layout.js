import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Solution Crow | We Never Miss the Details",
  description:
    "Website development, web apps, cloud, DevOps, and AI solutions built with precision.",
  openGraph: {
    title: "Solution Crow",
    description: "We build high-performance digital products.",
    url: "https://solutioncrow.com",
    siteName: "Solution Crow",
    images: [
      {
        url: "/crow-hero.png",
        width: 1200,
        height: 630,
        alt: "Solution Crow",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body className="bg-black text-white">
        {/* HEADER */}
        <Navbar/>

        {/* PAGE CONTENT */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer/>
      </body>
    </html>
  );
}
