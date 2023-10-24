import React from "react";
import HeroAnimation from "./components/HeroAnimation";
import Navbar from "./components/Navbar";
import ServiceSection from "./pages/ServiceSection";
function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroAnimation />
      <ServiceSection />
    </div>
  );
}

export default Page;
