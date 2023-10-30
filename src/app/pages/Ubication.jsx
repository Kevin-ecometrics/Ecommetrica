import { Card } from "@nextui-org/react";
import React from "react";
import { List, ListItem } from "@chakra-ui/react";
import { FaLocationArrow, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

function Ubication() {
  return (
    <div className="p-4 text-center text-black md:p-24 min-h-min">
      <h1 className="text-3xl font-bold text-[#623375]">Find us in Tijuana</h1>
      <p className="text-[#F52F55] text-4xl">Any questions?</p>
      <p className="text-[#F52F55] text-4xl">We love to answer</p>
      <div className="flex flex-col py-8 md:flex-row">
        <div className="flex-1 md:p-8">
          <Card
            className="mx-auto space-y-5 border-[#F52F55] shadow-2xl border-3 w-96 h-96"
            radius="lg"
          >
            <iframe
              width="400"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6727.878457915568!2d-117.037444!3d32.52777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949ac4abd84f5%3A0xa3949dea8d4d4a54!2sCalle%20Ignacio%20Zaragoza%208169-306b%2C%20Zona%20Centro%2C%2022000%20Tijuana%2C%20B.C.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sus!4v1698440320893!5m2!1ses-419!2sus"
            ></iframe>
          </Card>
        </div>
        <div className="flex items-center flex-1 p-8 text-black md:p-8">
          <List spacing={3}>
            {/* You can also use custom icons from react-icons */}
            <div className="flex">
              <FaLocationArrow className="mr-2" />
              <ListItem>
                Calle Ignacio Zaragoza 8169-306, 22000 Tijuana, B.C.{" "}
              </ListItem>
            </div>
            <div className="flex">
              <FaClock className="mr-2" />
              <ListItem>9-6 PCT</ListItem>
            </div>
            <div className="flex">
              <FaPhone className="mr-2" />
              <ListItem>+526646429633</ListItem>
            </div>
            <div className="flex">
              <FaEnvelope className="mr-2" />
              <ListItem>juanmanuel@e-commetrics.com</ListItem>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Ubication;
