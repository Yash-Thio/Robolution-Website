"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../Components/ui/TypewriterEffect";
import { content } from "./achievementsData";
import { ParallaxScroll } from "../Components/ui/parallax-scroll";

const About: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const Achievements = [
    {
      text: "Achievements",
      classname: "",
    },
  ];

  const images = [
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
    "/images/DSC_0169.JPG",
  ];

  const achievements = content.map((x, index) => (
    <div className="flex flex-wrap gap-10 relative mt-auto px-10 text-justify justify-between items-center sm:px-40" key={index}>
      <div className="flex flex-col gap-y-4 md:max-w-screen-md">
        <div className="text-2xl">{x.title}</div>
        <div className="items-center text-justify text-lg">{x.description}</div>
      </div>
      <div>{x.content}</div>
    </div>
  ));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sm:pt-24 flex flex-col w-full h-full">
      <motion.div
        initial={{ width: "100%", height: "60%", position: "fixed", zIndex: 1 }}
        animate={
          scrollY > 30
            ? {
                width: "300px",
                height: "300px",
                bottom: 0,
                right: 0,
                top: "auto",
                left: "auto",
              }
            : {
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                bottom: "auto",
                right: "auto",
              }
        }
        transition={{ duration: 0.5 }}
        className="sm:pt-24"
      >
        <iframe
          ref={videoRef}
          id="youtube-video"
          src="/videos/robolution Final.mp4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-3/5"
        />
      </motion.div>
      <div className="relative mt-auto pt-96 px-10 text-justify items-center text-lg sm:px-40">
        Robolution is a robotics club dedicated to teaching you everything you
        need to know about building robots and gadgets. Whether you're
        interested in line-following robots, gesture-controlled bots,quadpods,
        quadcopters, or more, we have you covered.Our team, Pratyunnmis,
        participates in various technical fests at prestigious institutions like
        the IITs and other top universities around the world. These competitions
        not only offer lucrative cash prizes but also push you to think
        creatively and outside the box.All you need to join us is a bit of
        passion and a willingness to learn. At Robolution, we believe in
        learning to serve. Come to learn, and leave empowered to innovate.
      </div>
      <div className="flex min-h-[350px] w-full justify-center px-2 sm:px-40 sm:my-16 items-center">
        <ParallaxScroll images={images} />
      </div>
      <div className="mt-24">
        <TypewriterEffect words={Achievements} />
      </div>
      <div className="flex flex-col gap-6">{achievements}</div>
    </div>
  );
};

export default About;
