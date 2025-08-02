import Hero from "@/components/blocks/Hero";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import WhyChooseUs from "@/components/blocks/WhyChooseUs";
import OurClient from "@/components/our-client/OurClient";
import FAQ from "@/components/faq/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
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
