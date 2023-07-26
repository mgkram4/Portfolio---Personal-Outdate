"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="left-0 w-full flex items-center justify-between bg-blue-60">
      {/* LEFT */}
      <div className="items-center ">
        <Link href="/">
          <div className="flex px-4 items-center ">
            <Player
              autoplay
              loop
              src="/nav.json"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </Link>
      </div>
      <div
        className="cursor-pointer px-4 md:hidden"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6  text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {/* RIGHT */}
      {/* Desktop */}
      <div className="items-centertext-2xl space-x-10 hidden md:flex mr-4 ">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>Home</span>
        </Link>

        <Link
          href="/Products"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>About Me</span>
        </Link>
        <Link
          href="/Form"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>Projects</span>
        </Link>
        <Link
          href="/Cart"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>Contact</span>
        </Link>
      </div>

      {/* Mobile */}
      <div
        className={`items-center text-black z-10 bg-blue-60 space-y-24 text-2xl font-weight-80 flex md:hidden flex-col absolute left-0 top-20 h-screen w-3/5 pt-36 shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>Home</span>
        </Link>
        <Link
          href="/Products"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>Products</span>
        </Link>
        <Link
          href="/Form"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>Quote</span>
        </Link>
        <Link
          href="/Cart"
          onClick={handleLinkClick}
          className="flex items-center hover:text-white hover:duration-500"
        >
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
