import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

function Collaboration() {
  return (
    <div id="agile" className="p-2 text-center text-black md:p-12 min-h-min">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#623375]">Collaboration stories</h1>
      <p className="py-4 text-base md:text-lg lg:text-xl text-[#FF4D4D]">We are community.</p>
      <p className="text-base md:text-lg lg:text-xl">
        Ecommerce adventures with the local marketing ecosystem.
      </p>
      <div className="grid grid-cols-1 gap-4 px-4 py-8 md:grid-cols-2 md:gap-8 md:px-12 md:py-16">
        <div className="grid items-center justify-center text-center">
          <Card className="p-4 space-y-5 shadow-2xl w-80 md:w-96 md:p-6 h-96" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="rounded-lg h-96 bg-default-300"></div>
            </Skeleton>
          </Card>
        </div>
        <div className="grid items-center justify-center text-center">
          <h1 className="px-6 text-base md:text-lg lg:text-xl">
              Welcome to our vibrant community, where E-commerce meets the heartbeat of local marketing. In this section, we celebrate the powerful collaborations that define our journey — a journey marked by shared goals, innovation, and a commitment to uplifting each other.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
