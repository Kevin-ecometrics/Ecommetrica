import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
export default function Cards() {
  const cards = [
    {
      id: 1,
      icon: "/logo1.webp",
      title: "RESEARCH AND DEVELOPMENT",
      subTitle: "Zero tech development?",
      description: "If your organization or business lacks a department specialized in: Positioning, Digital Marketing Dispatch, Supply Chain, R&D Business Development, Growth",
    },
    {
      id: 2,
      icon: "/logo2.webp",
      title: "BUSINESS INTELLIGENCE",
      subTitle: "Unclear digital direction?",
      description: "If all the digital environment (IT, internet, digital marketing) is still missing direction and marketing agencies or freelancers haven't succeeded at meeting your expectations.",
    },
    {
      id: 3,
      icon: "/logo3.webp",
      title: "ENHANCED ANALYTICS (KPIs)",
      subTitle: "Enough data to analyze?",
      description: "If you're not receiving campaign reports and strategic insights on a certain basis in key areas like sales, marketing, dispatch, inventory, accounting, and warehouse.",
    },
    {
      id: 4,
      icon: "/logo4.webp",
      title: "ACCURATE MARKETING CAMPAIGNS",
      subTitle: "Good client communication?",
      description: "If you've heard email's dead it's time to audit deficit campaigns and notice how misinformed customers drains money than state-of-the-art growth hacking.",
    },
  ];
  return (
    <div className="p-12 text-center text-black bg-white sm:px-8 md:px-32">
      <div className="grid grid-cols-2 gap-4 text-black">
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-2 shadow-2xl sm:col-span-1"
        >
          <CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-red-600 uppercase">
              Connect the internet to your Business!{" "}
            </h1>
            <p className="text-base font-medium text-red-800">
              Bring the best of the digital ecosystem right to your digital
              webpage or store, and boost your sales while you sleep.{" "}
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full opacity-50"
            width={500}
            height={500}
            src="/background2.png"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-2 shadow-2xl sm:col-span-1"
        >
          <CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-red-600 uppercase">
              Ecommerce is growing in pandemic!{" "}
            </h1>
            <p className="text-base font-medium text-red-800">
              Consultation fulfills business projections in data-oriented growth
              strategies for every revenue stream.
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full opacity-50"
            width={500}
            height={500}
            src="/background1.jpg"
          />
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-8 py-12">
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-3 sm:col-span-1 shadow-2xl bg-orange-200"
        >
          <CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
            <h1 className="py-2 text-4xl font-medium text-white">
              Business & Technology{" "}
            </h1>
            <p className="font-bold uppercase text-tiny text-white/60">
              To boost your sales with efficacy.{" "}
            </p>
          </CardHeader>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-3 sm:col-span-1 shadow-2xl"
        >
          <CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
            <h1 className="py-2 text-4xl font-medium text-black">
              Supply Chain & Dispatch{" "}
            </h1>
            <p className="font-bold text-black uppercase text-tiny">
              To save money and deliver on time.{" "}
            </p>
          </CardHeader>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-3 sm:col-span-1 shadow-2xl bg-pink-200"
        >
          <CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
            <h1 className="py-2 text-4xl font-medium text-white/90">
              Digital Marketing{" "}
            </h1>
            <p className="font-bold uppercase text-tiny text-white/60">
              To influence and grow your brand online{" "}
            </p>
          </CardHeader>
        </Card>
      </div>
      <h1 className="text-4xl font-bold text-[#623375]">
        WHY an e-Commerce Consultation?
      </h1>
      <p className="py-4 text-xl text-[#F52F55] font-semibold">Your CONSULTANT will</p>
      <p className="py-2 text-xl font-semibold text-black">
        Work on your businesses to grow key areas of your digital ecosystem.{" "}
      </p>
      <p className="py-2 text-xl font-semibold text-black">
        We boost your REVENUE STREAMS by finding solving neck bottles, once and
        for all, to welcome new growth hacking techniques
      </p>
      <p className="py-2 text-xl font-semibold text-black">We call it a recipe of success.</p>
      <h1 className="text-xl text-[#F52F55] font-semibold">TRY US, FREE OF CHARGE</h1>
      <p className="py-2 text-xl font-semibold text-black">
        schedule now if your business is having trouble in any of the following
        key business areas :
      </p>
      <div className="grid grid-cols-4 gap-8 py-12">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="col-span-4 py-4 shadow-2xl sm:col-span-1"
          >
            <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
              <Image
                height={100}
                width={100}
                src={card.icon}
                alt="Card icon"
                className="mx-auto"
              />
            </CardHeader>
            <CardBody className="flex items-center py-2 overflow-visible text-center">
              <h1 className="py-4 text-xl text-[#F52F55] font-semibold">{card.title}</h1>
              <p className="py-4 text-xl text-[#F52F55] font-semibold">{card.subTitle}</p>
              <h4 className="font-medium text-black">{card.description}</h4>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
