"use client";

import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimationHeader from "./AnimationHeader";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="min-h-screen bg-cover bg-aboutMe flex flex-col items-center mx-auto text-center">
      <div className="max-w-xl">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 1.0, delay: 0.75 }}
            className="flex m-12 ml-12 font-bold text-4xl justify-center items-center border-grey border-2 bg-white p-8 rounded-xl py-2 sm:text-5xl"
          >
            Hi, I&apos;m&nbsp;Mark Garcia
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 0.6, delay: 2.0 }}
            className="flex mr-12 ml-12 font-bold text-4xl justify-center items-center border-grey border-2 bg-white p-8 rounded-xl py-2 sm:text-3xl"
          >
            FullStack Web Developer
          </motion.div>

          <AnimationHeader />
        </div>
      </div>
    </div>
  );
}
