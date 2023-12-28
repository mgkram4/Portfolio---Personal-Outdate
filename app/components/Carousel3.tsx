"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-slate-100" ref={ref}>
      <div className="flex  p-4 ">
        {/* CARDS */}
        <div className="mx-auto max-w-sm md:max-w-3xl lg:max-w-6xl">
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items
              .slice()
              .reverse()
              .map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card key={item.id} {...item} />
                  </a>
                );
              })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description, link }: ItemType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/80 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;

type ItemType = {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
  link: string;
};

const items: ItemType[] = [
  {
    id: 1,
    url: "/Whale.png",
    category: "E-Commerce",
    title: "WhaleTech3D",
    link: "https://www.whaletech3d.shop",
    description:
      "WhaleTech is an online store specializing in 3D printers and accessories, providing a user-friendly experience with a diverse product catalog. Built with: React JS, Firebase, Email JS, Tailwind",
  },
  {
    id: 2,
    url: "/stoic.png",
    category: "Blog",
    title: "StayStoic",
    link: "https://blog-b3hf.vercel.app/",
    description:
      "StayStoic presents a captivating blog experience, driven by a powerful tech stack that includes: Next JS, Sanity, Tailwind, Google Adsense",
  },
  {
    id: 3,
    url: "/Socal.png",
    category: "Business Information",
    title: "Socal Solar",
    link: "https://washsocalsolar.com/",
    description:
      "Socal Solar Wash is a dynamic solar energy advocacy platform, leveraging: Next Js, Tailwind, Email js",
  },
  {
    id: 4,
    url: "/Simply.png",
    category: "E-Commerce",
    title: "SimplyPet",
    link: "https://dog-sanity-next-stripe.vercel.app/",
    description:
      "SimplyPet E-Commerce Store features: Next JS, Stripe, Sanity ",
  },
];
