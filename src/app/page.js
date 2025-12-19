import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import TechStack from "@/Components/TeachStack";
import ServicesWithDetails from "@/Components/ServiceWithDetails";
import AboutProcess from "@/Components/AboutProgress";
import ContactSection from "@/Components/ContactSection";
import FAQSection from "@/Components/FAQSection";
import TeamSection from "@/Components/TeamSection";
import ClientFeedbackSection from "@/Components/ClientFeedBackSection";
import IndustriesSection from "@/Components/IndustriesSection";



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
     <IndustriesSection/>
     <TechStack/>
     <FAQSection/>
    <ServicesWithDetails/>
    <AboutProcess/>
    <ClientFeedbackSection/>
    <TeamSection/>
    <ContactSection/>
    
    </>
  );
}
