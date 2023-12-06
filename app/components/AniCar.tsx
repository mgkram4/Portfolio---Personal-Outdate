"use client";

import { motion } from "framer-motion";

const AniCar = () => {
  return (
    <section className="bg-white py-4 rounded overflow-hidden">
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 px-16 rounded overflow-hidden flex-shrink-0"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="w-16 h-16 flex justify-center items-center md:w-28 rounded">
      <img src={imageSrc} alt="Logo" className="max-h-full max-w-full " />
    </div>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem imageSrc="/image7.png" />
    <LogoItem imageSrc="/image9.png" />
    <LogoItem imageSrc="/image12.png" />
    <LogoItem imageSrc="/image13.png" />
    {/* Add more LogoItems with your image URLs */}
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem imageSrc="/image14.png" />
    <LogoItem imageSrc="/image15.png" />
    <LogoItem imageSrc="/image16.png" />
    <LogoItem imageSrc="/image17.png" />
    {/* Add more LogoItems with your image URLs */}
  </>
);

export default AniCar;
