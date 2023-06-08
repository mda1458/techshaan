import React, { useState } from "react";
import { useRouter } from "next/router";
import  Link  from "next/link"
import { GiComputerFan } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({cart, user, setUser}) => {
  const [drop, setDrop] = useState(true);
  const router = useRouter();

  const logout = (e) => {
    e.preventDefault();
    setUser(null);
    setDrop(true);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/')
  }
  return (
    <header className="text-white bg-blue-700   w-full body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
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
        <Link
          href={"/cart"}
          className="relative inline-flex items-center m-3 p-3 text-sm font-medium text-center text-white rounded-lg"
        >
          <AiOutlineShoppingCart className="text-2xl" />
          {cart.length === 0 ? null : (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
              {cart.length}
            </div>
          )}
        </Link>
        {user ? (
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.imgsrc||"https://img.freepik.com/free-icon/user_318-790139.jpg"}
                alt="user photo"
              />
            </button>
            <div
              className={`${
                drop ? "hidden" : "block"
              }  absolute right-16 top-16 mt-2 rounded-md shadow-lg py-1 bg-yellow-500`}
              
            >
              <div className="flex flex-col text-center">
                <span className="block w-full text-black font-semibold px-4 py-2 text-sm">
                  {user.name}
                </span>
                <Link href={"/profile"} className="block w-full text-black hover:bg-blue-700 hover:text-white px-4 py-2 text-sm">
                    Profile
                </Link>
                <Link href={"/orders"} className="block w-full text-black hover:bg-blue-700 hover:text-white px-4 py-2 text-sm">
                    Orders
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-black hover:bg-blue-700 hover:text-white px-4 py-2 text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link href={"/login"}>
            <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-white mt-4 md:mt-0">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
