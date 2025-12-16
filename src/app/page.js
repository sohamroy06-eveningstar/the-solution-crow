import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TechStack from "@/Components/TeachStack";
import ServicesWithDetails from "@/Components/ServiceWithDetails";
import AboutProcess from "@/Components/AboutProgress";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Solution Crow",
      url: "https://solutioncrow.com",
      description:
        "Web development, cloud, DevOps and AI solutions.",
    }),
  }}
/>

     
     <Hero/>
     <Features/>
     <TechStack/>
     
    <ServicesWithDetails/>
    <AboutProcess/>
    <ContactSection/>
    
    </>
  );
}
