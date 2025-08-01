import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurClient from "@/components/OurClient";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhatWeOffer />
      <WhyChooseUs />
      <Testimonial />
      <OurClient />
      <FAQ />
    </div>
  );
}
