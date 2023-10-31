import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("Services");

  const menuItems = [
    // { name: "Principal", href: "#principal" },
    { name: "Services", href: "#services" },
    { name: "Our Consulting", href: "#consulting" },
    { name: "Schema", href: "#schema" },
    { name: "Success Stories", href: "#stories" },
    { name: "Collaboration", href: "#agile" },
  ];

  const handleMenuItemClick = (href) => {
    console.log(`Clicked on ${href}`);
    setIsMenuOpen(false);
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  }; // Agregamos la función para actualizar la sección activa

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gray-100"
    >
      <NavbarContent className="text-black sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Image src={"/logo.png"} width={50} height={50} alt={"logo"} />{" "}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          <Image src={"/logo.png"} width={50} height={50} alt={"logo"} />
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link
              to={item.href.replace("#", "")}
              className={`text-black hover:text-red-700 ${
                activeSection === item.href.replace("#", "")
                  ? "font-bold text-red-700"
                  : ""
              }`} // Agregamos la clase CSS correspondiente
              onClick={() => {
                handleMenuItemClick(item.href);
                handleSetActiveSection(item.href.replace("#", ""));
              }} // Actualizamos la sección activa al hacer clic
              smooth={true}
              duration={1000}
              spy={true}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden text-black lg:flex">
          <Link to="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link href="https://wa.me/526646429633?text=Im%20interested%20
          in%20create%20my%20page" target="_blank">
            <a>
              <Button color="danger">CONTACT US</Button>
            </a>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={`w-full text-red-800 hover:text-blue-700 ${
                activeSection === item.href.replace("#", "") ? "font-bold" : ""
              }`} // Agregamos la clase CSS correspondiente
              to={item.href.replace("#", "")}
              size="lg"
              onClick={() => {
                handleMenuItemClick(item.href);
                handleSetActiveSection(item.href.replace("#", ""));
              }} // Actualizamos la sección activa al hacer clic
              smooth={true}
              duration={1000}
              spy={true}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
