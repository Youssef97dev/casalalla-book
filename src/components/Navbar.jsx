"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full flex flex-row justify-between items-center uppercase px-4 lg:px-10 border-b border-primary_11 bg-primary_10">
        <ul className="w-full lg:flex justify-start items-center gap-8 text-xs text-primary_11 hidden">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Day pass</Link>
          </li>
          <li>
            <Link href="#">Reservation</Link>
          </li>
        </ul>
        <div className="w-full flex lg:justify-center justify-start items-center  z-30">
          <Image
            src="/logo-4.png"
            width={150}
            height={150}
            className="cursor-pointer w-28 h-28 lg:w-36 lg:h-36"
          />
        </div>
        <div className="w-full flex justify-end items-center">
          <Link
            href="#"
            className="bg-primary_11 hover:bg-[#242323] text-primary_10 px-10 py-5 text-xs hidden lg:block"
          >
            Book Now
          </Link>
          <div
            className="text-primary_11 block lg:hidden z-30 transition-transform duration-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineClose
                size={30}
                className="transform transition-transform duration-500 rotate-180"
              />
            ) : (
              <CiMenuBurger
                size={30}
                className="transform transition-transform duration-300 rotate-0"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
        <div className="fixed top-0 right-0 w-full h-screen bg-primary_12 z-20 flex flex-col items-center justify-between font-adonis">
          <ul className="space-y-5 text-center text-white leading-[27.88px] text-[27.88px] mt-44">
            <li>
              <Link href="#">HOME</Link>
            </li>
            <li>
              <Link href="#">ABOUT</Link>
            </li>
            <li>
              <Link href="#">DAY PASS</Link>
            </li>
          </ul>
          <Link
            href="#"
            className="bg-primary_11 text-white px-7 py-4 mb-10 text-[18px] font-medium"
          >
            Book Now
          </Link>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
