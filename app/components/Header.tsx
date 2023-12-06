"use client";

import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimationHeader from "./AnimationHeader";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <div className="min-h-screen text-slate-900 bg-cover bg-aboutMe flex flex-col items-center mx-auto text-center">
      <div className="max-w-xl mt-8 ">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className=" bg-white bg-opacity-95 p-8 rounded-xl py-2 text-5xl mb-8 font-semibold"
          >
            <span className=""> Hey, I&apos;m Mark!</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3.0 }}
            className=" font-semibold p-2 text-4xl justify-center items-center  bg-white bg-opacity-95  rounded-xl py-2 "
          >
            <span className="mr-1">I am a </span>
            <TypeAnimation
              sequence={[
                "FullStack Developer ",
                4000,
                "UI/UX Designer",
                4000,
                "Systems Engineer",
                4000,
                "Instructor",
                4000,
              ]}
              speed={50}
              className="text-[rgba(101,74,121,1)]  inline-flex "
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>

          <div className="mt-8">
            <AnimationHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
