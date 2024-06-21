"use client";
import React from "react";
import { StickyScroll } from "../Components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Robo Rumble",
    description:
      `Robo Rumble is a marquee event at Pantheon Techfest. Robo Rumble promises an
      action-packed showdown, where teams of 1 to 4 members engage in a fierce robotic
      battle within a designated arena. The objective was: out maneuver and outlast the
      competition. The last robot standing emerges victorious, earning bragging rights and the
      coveted Robo Rumble champion title.`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "google forms link",
  },
  {
    title: "Droid Troopers",
    description:
      `Droid Troopers is another marquee event at Pantheon Techfest, designed to challenge
      participants' robotic design and control skills. Teams navigate a dynamic track filled with
      diverse obstacles, pushing their creations to the limits. The competition thrives on
      agility, problem-solving, and strategic maneuvering, ultimately rewarding the team
      whose robot conquers all challenges with the most speed and precision.`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "google forms link",
  },
  {
    title: "Fruit Ninja",
    description:
      `Our club organized Fruit Ninja, a Marquee event on Day 3 of Bitotsav'24, using Hand
      Gesture as an innovative adaptation of the classic mobile game that utilizes hand
      tracking technology.
      The innovative use of hand gesture recognition technology added a unique twist to the
      traditional gameplay, making it a memorable and enjoyable activity for all participants.
      We look forward to exploring similar creative initiatives in future college events.`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "google forms link",
  },
  {
    title: "Fruit Ninja",
    description:
      `Our club organized Fruit Ninja, a Marquee event on Day 3 of Bitotsav'24, using Hand
      Gesture as an innovative adaptation of the classic mobile game that utilizes hand
      tracking technology.
      The innovative use of hand gesture recognition technology added a unique twist to the
      traditional gameplay, making it a memorable and enjoyable activity for all participants.
      We look forward to exploring similar creative initiatives in future college events.`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "google forms link",
  },
];
export default function Ongoing() {
  return (
    <div className="mt-24">
      <h1>Ongoing Events</h1>
      <StickyScroll content={content} />
    </div>
  );
}
