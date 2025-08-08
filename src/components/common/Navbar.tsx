"use client";
import { useState } from "react";
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
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-5  flex justify-between items-center gap-4 sm:gap-6 ">
        <div className="">
          <Link href="/" className="flex items-center justify-center">
            <img
              src={"/assets/images/logo.png"}
              alt="Smart Installer Logo"
              className=" w-20 h-12  sm:w-24 sm:h-16 object-center object-contain"
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <h2 className="text-xl sm:text-2xl  font-bold text-[#00101A] ">
            Smart Installers
          </h2>
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
          <Link
            href={"/contact-us"}
            className="inline-block bg-gray-100 border border-gray-400 text-center text-black text-nowrap px-6 py-3 rounded-md text-lg font-semibold  cursor-pointer"
          >
            Contact Us
          </Link>
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
          <Link
            href={"/contact-us"}
            className="mt-4 inline-block w-full text-center bg-gray-100 border border-gray-400 text-black text-nowrap px-6 py-3 rounded-md text-lg font-semibold  cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
