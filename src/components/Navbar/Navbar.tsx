"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./menus";
import { H2, H3, H4 } from "../Typography";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <H2 className=" font-bold hover:text-primary transition duration-300">
                R.<span className="text-primary">A</span>.Y Vic
                <span className="text-primary">to</span>ry
              </H2>
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <H4
                  className={`relative hover:text-primary transition duration-300 after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-1/2 after:bg-primary after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 ${
                    pathname === item.href
                      ? "text-primary after:scale-x-100 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </H4>
              </Link>
            ))}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <H3
                className={`relative hover:text-primary transition duration-300 block px-3 py-2 rounded-md text-base font-medium after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-1/2 after:bg-primary after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 ${
                  pathname === item.href
                    ? "text-primary after:scale-x-100 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </H3>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
