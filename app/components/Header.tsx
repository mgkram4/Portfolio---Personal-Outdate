"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Header() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center ml-8 mr-8">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`flex justify-center items-center bg-slate-50 font-semibold text-5xl p-6 rounded-xl ${
              showText ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            Hi, I&apos;m&nbsp;Mark Garcia
          </div>
        </div>

        <div
          className={`flex justify-center items-center underline bg-slate-50 font-semibold text-3xl p-4 m-6  rounded-xl ${
            showText ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        >
          FullStack Web Developer
        </div>

        <div className="flex px-4 items-center ">
          <Player
            autoplay
            loop
            src="/dev.json"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}
