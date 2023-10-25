import React from "react";
import { Card, Button } from "@nextui-org/react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
function ConsultingSection() {
  const datos = [
    {
      id: 1,
      logo: "/starter_plan_logo.png",
      title: "Starter Plan",
      subtitle: "For new comers",
      price: 565.0,
      month: "per 3 months",
      description: "eCommerce consulting      ",
      subdescription:
        "Template webpage Email-WhatsApp Facebook store SEO meta-analysis      ",
        width: 100,
        height: 100
    },
    {
      id: 2,
      logo: "/pro_logo.png",
      title: "Pro Plan        ",
      subtitle: "For small businesses & entrepreneurs        ",
      price: 795.0,
      month: "per 4 months",
      description: "Advanced consultation        ",
      subdescription:
        "Project management Webpage that sales! Live chat set up Email campaigns Facebook ads SEO campaign Digital team training Up to 15 products or 3 services Onboarding tech stack ",
        width: 100,
        height: 100
    },
    {
      id: 3,
      logo: "/enterptrise_logo.png",
      title: "Enterprise",
      subtitle: "For ambitioning small to medium size firms      ",
      price: 985.0,
      month: "per 6 months",
      description: "Everything Pro, plus:      ",
      subdescription:
        "One-on-one coaching Analytics dashboard Automations Up to 150 products or 8 services Bonus care package!",
        width: 100,
        height: 100
    },
    {
      id: 4,
      logo: "/custom_logo.webp",
      title: "Custom      ",
      subtitle: "For larger enterprises      ",
      price: 1295.0,
      month: "per 8 months",
      description:
        "You have a custom webpage in mind, let's start it now!      ",
      subdescription: "Limited products & services        ",
      width: 40,
      height: 40
    },
  ];

  const handleMouseOver = (event) => {
    event.currentTarget.classList.add("shadow-red-800");
  };

  const handleMouseOut = (event) => {
    event.currentTarget.classList.remove("shadow-red-800");
  };

  return (
    <div className="items-center py-16 text-center min-h-min">
      <h1 className="text-[#623375] text-5xl font-bold">
        eCommerce meticulously appraised
      </h1>
      <p className="text-[#f52e55] text-xl py-8 font-bold">
        A unified digital team with marketing and technology expertise, built
        especially for B2B and B2C eCommerce!
      </p>
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-32">
        {datos.map((dato) => (
          <Card
            key={dato.id}
            className="border border-gray-300 shadow-2xl rounded-2xl"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {dato.id === 2 && (
              <div className="absolute top-0 w-full text-center text-white bg-red-500">
                <h1 className="text-lg font-bold">Más popular</h1>
              </div>
            )}
            <div className="w-full overflow-hidden bg-white rounded-md max-w-330">
              <div className="items-center py-8 text-center text-gray-800">
                <Image
                  src={dato.logo}
                  width={dato.width}
                  height={dato.height}
                  alt="starter plan logo"
                  className="mx-auto rounded-full"
                />
                <h1 className="py-2">{dato.title}</h1>
                <h1 className="py-2">{dato.subtitle}</h1>
                <div className="flex flex-row items-center justify-center">
                  <div className="text-3xl">$</div>
                  <div className="text-6xl font-bold">{dato.price}</div>
                </div>
                <div className="py-2 text-gray-500">{dato.month}</div>
                <Button className="w-48 mt-10 text-white bg-red-500 hover:bg-red-700 rounded-2xl">
                  START NOW
                </Button>
              </div>
              <div className="p-8 mx-auto">
                <h1>{dato.description}</h1>
                <h1>{dato.subdescription}</h1>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ConsultingSection;
