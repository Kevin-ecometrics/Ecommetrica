"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Principal", href: "#principal" },
    { name: "Services", href: "#services" },
    { name: "Our Consulting", href: "#consulting" },
    { name: "Schema", href: "#schema" },
    { name: "Success Stories", href: "#stories" },
    { name: "Agile", href: "#agile" },
  ];

  const handleMenuItemClick = (href) => {
    // Add your code here to handle the click event
    console.log(`Clicked on ${href}`);
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-gray-100">
      <NavbarContent className="text-black sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Image src={"/logo.png"} width={50} height={50} alt={"logo"} />
          <p className="font-bold text-black">Ecommetrica</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          <Image src={"/logo.png"} width={50} height={50} alt={"logo"} />
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link
              href={item.href}
              className="text-black hover:text-red-700"
              onClick={() => handleMenuItemClick(item.href)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="danger" href="#">
            CONTACT US
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-red-800 hover:text-blue-700"
              href={item.href}
              size="lg"
              onClick={() => handleMenuItemClick(item.href)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
