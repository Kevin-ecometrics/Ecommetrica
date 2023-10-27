"use client"
import React, { useState, useEffect } from "react";
import HeroAnimation from "./components/HeroAnimation";
import Navbar from "./components/Navbar";
import ServiceSection from "./pages/ServiceSection";
import ConsultingSection from "./pages/ConsultingSection";
import Loading from "./components/Loading";
import SchemaSection from "./pages/SchemaSection";
import CityParralax from "./pages/CityParralax";
import Sucess from "./pages/Sucess";
function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
  }, []);
  return (
    <div className="bg-white">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <HeroAnimation />
          <ServiceSection />
          <ConsultingSection />
          <SchemaSection />
          <CityParralax />
          <Sucess />
        </>
      )}
    </div>
  );
}

export default Page;
