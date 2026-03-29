
import CustomerSection from "@/components/CustomerSection";
import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";
import MomentSection from "@/components/MomentSection";
import ProcessSection from "@/components/ProcessSection";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <ServiceSection />

      <CustomerSection />
      <ProcessSection />
      <MomentSection />
      <FAQSection />
      <TestimonialSection />
      <ScrollToTop />
    </>
  );
}
