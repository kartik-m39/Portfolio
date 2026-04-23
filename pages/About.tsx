"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function About() {
  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white flex justify-center w-full">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="min-h-screen w-full max-w-2xl px-6 md:px-12 py-32 flex flex-col items-start"
      >
        {/* Intro */}
        <motion.div variants={item} className="flex flex-col">
          <h2 className="text-gray-900 dark:text-[#fafafa] text-4xl md:text-5xl mb-4 font-bold tracking-tighter">
            Hey, I&apos;m Kartik Manchanda
          </h2>
          <p className="text-gray-600 dark:text-[#ababab] text-lg md:text-xl font-medium leading-6 tracking-tight">
            Breaking limits, building apps!⚡
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={item}
          className="mt-10 md:mt-10 h-64 md:h-80 w-full"
        >
          <div
            className="bg-[url(/About.jpg)] w-full h-full bg-cover rounded-lg shadow-lg"
            style={{ backgroundPosition: "center 30%" }}
          />
        </motion.div>

        {/* Section headings */}
        <motion.div variants={item} className="mt-12 w-full mb-2">
          <div className="text-xl font-semibold tracking-tighter">
            Grinding & hustling
          </div>
          {/* <div className="text-xl font-semibold tracking-tighter mt-2">
            Feels / Relatables
          </div> */}
        </motion.div>

        {/* Story */}
        <motion.div
          variants={container}
          className="mt-8 space-y-3 text-gray-600 dark:text-[#ababab] font-medium md:leading-relaxed tracking-tighter text-justify md:text-left"
        >
          <motion.p variants={item}>
            I&apos;m a 2nd year Computer Science student, currently focused on
            building strong foundations in Data Structures & Algorithms while
            exploring backend development with Go.
          </motion.p>

          <motion.p variants={item}>
            Alongside academics, I work with my university&apos;s OSC web team.
            I&apos;ve contributed to containerizing internal services and setting
            up Docker Compose workflows to make development and deployments more
            consistent.
          </motion.p>

          <motion.p variants={item}>
            I&apos;ll also be contributing to the frontend of the main platform
            in the coming weeks, which I&apos;m excited about since it connects
            both design and engineering in a real product environment.
          </motion.p>

          <motion.p variants={item}>
            I&apos;ve participated in multiple hackathons and was selected for SIH
            at the college level, though I couldn&apos;t make it through the final
            round. Each attempt has been less about winning and more about
            learning how real-world problem solving works.
          </motion.p>

          <motion.p variants={item}>
            I don&apos;t spend all my time in front of a screen — I usually read
            blogs or go out when something interesting comes up, instead of
            staying isolated in my room.
          </motion.p>

          <motion.p variants={item}>
            At the moment, I&apos;m most interested in freelance and remote work
            where I can build real projects, experiment with new tools, and keep
            learning by shipping things.
          </motion.p>
        </motion.div>

        {/* Closing */}
        <motion.p
          variants={item}
          className="text-gray-500 dark:text-[#888] text-base mt-10"
        >
          Still figuring things out — but I like building things that work in
          the real world.
        </motion.p>
      </motion.div>
    </div>
  );
}