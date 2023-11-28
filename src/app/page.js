"use client"
import React, { useState, useEffect } from "react";
import HeroAnimation from "./components/HeroAnimation";
import Navbar from "./components/Navbar";
import ServiceSection from "./pages/ServiceSection";
import ConsultingSection from "./pages/ConsultingSection";
import Loading from "./components/Loading";
import SchemaSection from "./pages/SchemaSection";
import Parralax from "./pages/Parralax";
import Parralax2 from "./pages/Parralax2";
import Parralax3 from "./pages/Parralax3";
import Sucess from "./pages/Sucess";
import Collaboration from "./pages/Collaboration";
import Ubication from "./pages/Ubication";
import Footer from "./pages/Footer";

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
          <Parralax />
          <Sucess />
          <Parralax2 />
          {/* <Collaboration /> */}
          <Parralax3 />
          <Ubication />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Page;
