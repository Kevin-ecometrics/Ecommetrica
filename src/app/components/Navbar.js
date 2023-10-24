import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-transparent">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Image
          src="/logo.png"
          width={50}
          height={100}
          alt="Logo Ecommetrica"
        />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-gray-200 hover:border-gray-200">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray-200"
          >
            Principal
          </Link>
          <Link
            href="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray-200"
          >
            Services
          </Link>
          <Link
            href="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray-200"
          >
            Our Consulting
          </Link>
          <Link
            href="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray-200"
          >
            Schema
          </Link>
          <Link
            href="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray-200"
          >
            Success stories
          </Link>
          <Link
            href="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray-200"
          >
            Agile
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-gray-200"
          >
            Login
          </Link>
          <Link
            href="/"
            className="inline-block px-4 py-2 mt-4 ml-2 text-sm leading-none text-white bg-red-500 border border-white rounded hover:border-transparent hover:text-red-500 hover:bg-white lg:mt-0"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
