import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

function Sucess() {
  let dataSucess = [
    {
      id: 1,
      name: "Mario Villalvazo",
      avatar: "/avatar1.webp",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien",
      company: "Chief Executive Office, Solar Enterprise      ",
      description:
        "This is how a million-dollar company looks like in eCommerce. Our hard and precise work pays to check when more people harvests from our meticulously appraised method.",
    },
    {
      id: 2,
      name: "Edwin & Mahler Calleros",
      avatar: "/avatar2.webp",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien",
      company: "Entrepreneurs",
      description:
        "Two brothers with a dream came true. See the adventure of a new Covid-era born firm as the e-Commerce most disrupting enterprise in its market and #NumberONE in its sector      ",
    },
    {
      id: 3,
      name: "Joe Hefferan",
      avatar: "/avatar3.webp",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien",
      company: "Ziggiz a worldwide firm      ",
      description:
        "Intro of a commodity to the e-Commerce, a travel from China to USA, México and Canada      ",
    },
    {
      id: 4,
      name: "Martha Rosa Lucero",
      avatar: "/avatar4.webp",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien",
      company: "Lucero Dental Group      ",
      description:
        "The latest champion in a thriving dental sector at the most important region worldwide in medical tourism and health services.      ",
    },
  ];

  return (
    <div id="stories" className="px-24 py-12 text-black min-h-min">
      <div className="flex items-center justify-center">
        <Card className="bg-[#7C005C] shadow-2xl">
          <CardBody className="p-8">
            <h1 className="text-4xl font-bold text-center text-white">
              Clients testimonials
            </h1>
            <p className="text-xl text-[#FF4D4D] text-center">
              We are proud of our customers success stories
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="p-12 text-center ">
        <span className="text-bold text-xl text-[#FF4D4D]">HERE</span>
        <p className="text-[#FF4D4D]">
          Let them share their experience with our business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 p-8 sm:grid-cols-2 md:grid-cols-4">
        {dataSucess.map((data) => (
          <div key={data.id} className="flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none">
              <Avatar
                isBordered
                color="secondary"
                src={data.avatar}
                alt="clients"
                className="shadow-2xl w-92 h-92 text-large sm:h-92 sm:w-92 md:h-92 md:w-92"
              />
              <p className="text-sm font-bold py-4 sm:py-6 flex justify-center text-[#F52F55]">
                {data.name}
              </p>
              <p className="text-sm font-bold flex justify-center text-[#623375]">
                {data.company}
              </p>
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none">
                <p className="text-center">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sucess;
