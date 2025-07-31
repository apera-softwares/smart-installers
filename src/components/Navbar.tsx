"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { navLinks } from "@/data/navlinks";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="w-full ">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-5  flex justify-between items-center gap-6 ">
        <div className="">
          <Link href="/" className="flex items-center justify-center">
            <img
              src={"/assets/images/logo.png"}
              alt="Smart Installer Logo"
              className="w-full h-full object-center object-cover"
            />
          </Link>
        </div>

        <div className="hidden lg:flex gap-2.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className={` ${
                pathname === link.path ? "font-bold" : ""
              } hover:font-bold  p-2.5 transition-all duration-500`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="inline-block bg-gray-100 border border-gray-400 text-black text-nowrap px-6 py-3 rounded-md text-lg font-semibold  cursor-pointer">
            Contact Us
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className=" flex items-center justify-center"
          >
            {mobileOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t  border-gray-200 px-4 sm:px-6 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className={` ${
                pathname === link.path ? "font-bold" : ""
              } block py-2  font-medium text-text-base hover:text-primary transition-all duration-300`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-4 w-full bg-gray-100 border border-gray-400 text-black text-nowrap px-6 py-3 rounded-md text-lg font-semibold  cursor-pointer">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
