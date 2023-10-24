import React from 'react';
import HeroAnimation from './components/HeroAnimation';
import Navbar from './components/Navbar';

function Page() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800">
        <Navbar />
        <HeroAnimation />

      <div className="absolute bottom-0 w-full bg-white rounded-tl-3xl h-1/4">
      </div>
    </div>
  );
}

export default Page;