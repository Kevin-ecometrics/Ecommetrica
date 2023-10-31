import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="p-10 text-white bg-white border-t border-gray-700">
      <div className="grid grid-cols-3 gap-8 text-black">
        {/* Company Column */}
        <div>
          <h3 className="mb-3 text-lg font-bold">Company</h3>
          <ul>
            <li className="mb-2">
              {/* <Link
                to="principal"
                smooth={true}
                duration={1000}
                className="hover:text-gray-400"
              >
                Principal
              </Link> */}
            </li>
            <li className="mb-2">
              <Link
                to="services"
                smooth={true}
                duration={1000}
                className="hover:text-gray-400"
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="consulting"
                smooth={true}
                duration={1000}
                className="hover:text-gray-400"
              >
                Our Consulting
              </Link>
            </li>
            <li>
              <Link
                to="schema"
                smooth={true}
                duration={1000}
                className="hover:text-gray-400"
              >
                Schema
              </Link>
            </li>
            <li>
              <Link
                to="stories"
                smooth={true}
                duration={1000}
                className="hover:text-gray-400"
              >
                Success Stories
              </Link>
            </li>
            <li>
              <Link
                to="agile"
                smooth={true}
                duration={1000}
                className="hover:text-gray-400"
              >
                Collaboration
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="mb-3 text-lg font-bold">Support</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Safety Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Community Guidelines
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="mb-3 text-lg font-bold">Legal</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Cookies Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Law Enforcement
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center pt-4 mt-10 text-center text-black border-t border-gray-700">
        <Image src="/logo.png" width={70} height={70} alt="logo_ecommetrica" />
        <span className="ml-4">© 2023 Ecommetrica. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
