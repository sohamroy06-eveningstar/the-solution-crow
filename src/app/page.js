import WebsiteDevelopment from "@/Components/ WebsiteDevelopment";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import TechStack from "@/Components/TeachStack";


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

     <Navbar/>
     <Hero/>
     <Features/>
     <TechStack/>
     <Services/>
    <WebsiteDevelopment/>
    </>
  );
}
