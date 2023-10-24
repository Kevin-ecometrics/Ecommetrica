import React from "react";
import HeroAnimation from "./components/HeroAnimation";
import Navbar from "./components/Navbar";

function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroAnimation />
    </div>
  );
}

export default Page;
