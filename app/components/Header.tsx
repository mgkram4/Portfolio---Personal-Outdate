"use client";

import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Header() {
  return (
    <div className=" min-h-screen bg-cover bg-aboutMe flex flex-col items-center  mx-auto text-center ">
      <div className="max-w-xl">
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-4xl text-[rgba(101,74,121,1)] sm:text-5xl p-4 sm:p-6 ">
            Hi, I&apos;m&nbsp;Mark Garcia
          </div>
          <div
            className="flex justify-center items-center text-[rgba(101,74,121,1)]  font-bold  text-2xl sm:text-4xl p-2 sm:p-4 m-4 sm:m-6 rounded-xl
          
          "
          >
            FullStack Web Developer
          </div>
        </div>

        <div className="flex justify-center items-center  ">
          <Player
            autoplay
            loop
            src="/devCoding.json"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
