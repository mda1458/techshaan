import React from "react";
import  Link  from "next/link"
import { GiComputerFan } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="text-white bg-blue-900 bg-opacity-60 w-full body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <GiComputerFan className="text-3xl" />
          <span className="ml-3 text-xl">TechShaan</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-yellow-500">
            Home
          </Link>
          <Link href={"/computers"} className="mr-5 hover:text-yellow-500">
            Computers
          </Link>
          <Link href={"/laptops"} className="mr-5 hover:text-yellow-500">
            Laptops
          </Link>
          <Link href={"/accessories"} className="mr-5 hover:text-yellow-500">
            Accessories
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-yellow-500">
            About us
          </Link>
          <Link href={"/contact"} className="mr-5 hover:text-yellow-500">
            Contact us
          </Link>
        </nav>
        <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-white mt-4 md:mt-0">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
