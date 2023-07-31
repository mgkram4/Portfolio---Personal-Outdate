"use client";

// Navbar.js

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // After 3 seconds, set the 'visible' state to true to start the fade-in transition.
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Clean up the timer when the component unmounts.
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleToggleChange = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle the 'open' state on every click
  };

  return (
    <div className="navbar mt-2 rounded-2xl bg-gradient-to-r from-[rgba(101,74,121,1)] to-[#866a9f]">
      <div className="flex-1">
        <div className="items-center">
          <Link href="/">
            <div className="flex px-4 items-center">
              <Player
                autoplay
                loop
                src="/nav.json"
                style={{
                  width: "50px",
                  height: "50px",
                  opacity: visible ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                }}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-none">
        {/* Use the 'checked' prop and 'onChange' event handler */}

        <ul className="menu menu-horizontal  px-1">
          <li>
            <details>
              <summary className="font-bold text-lg">More</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/resume">Resume</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* AudioPlayer to play music */}
    </div>
  );
}

export default Navbar;
