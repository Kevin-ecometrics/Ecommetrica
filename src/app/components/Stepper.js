import React, { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stepper() {
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleSection = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };

  const sectionTitles = ["Choose", "Meet", "Method", "Project"];

  return (
    <article>
      <div className="py-12 text-center text-white bg-[#7C005C] sm:px-8 md:px-72">
        <h1 className="text-4xl font-bold">Whats inside a Consultation?</h1>
        <p className="text-lg text-white">The Working Schema</p>

        <div className="flex flex-col items-center justify-between px-12 mt-8 sm:flex-row">
          {[1, 2, 3, 4].map((section, index) => (
            <Fragment key={section}>
              <div
                className="w-full mb-8 font-bold text-center sm:w-1/4 sm:mb-0"
                onClick={() => toggleSection(section)}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto border border-white rounded-md cursor-pointer hover:text-white hover:bg-red-500">
                  {section}
                </div>
                <h3 className="mt-4 text-2xl font-semibold">
                  {sectionTitles[section - 1]}
                </h3>
                <AnimatePresence>
                  {selectedSection === section && (
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-2"
                    >
                      {section === 1
                        ? "Pick your favorite plan. In 3 business days receive our recipe of success."
                        : section === 2
                        ? "Await immediate onboarding. Supervise the work in progress. Ask us anything!"
                        : section === 3
                        ? "Be cool at your own pace while we create your dreamed eCommerce."
                        : "At completion, all deliverables and services are 100% guaranteed."}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            {index < 3 && selectedSection !== 4 && (
                <div className="hidden w-24 h-px bg-white sm:block"></div> // Línea vertical para diseño en columna
            )}
                {index < 3 && (
                    <div className="w-px h-8 my-4 bg-white sm:hidden"></div> // Línea horizontal para diseño en fila
                )}
            </Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}