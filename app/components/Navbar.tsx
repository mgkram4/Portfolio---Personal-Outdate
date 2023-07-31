"use client";

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

  return (
    <div
      className="navbar bg-base-100"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <div className="flex-1">
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
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <details>
              <summary>More</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/resume">Resume</Link>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
