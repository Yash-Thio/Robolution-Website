"use client";
import { useEffect, useRef } from "react";
import Navbar from "./Components/Navigation/Navbar";
import * as THREE from 'three';
import NET from 'vanta/src/vanta.rings';
import Hero from "./Home/Hero";

export default function Main() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect : any;
    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  color: 0xff00
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="bg">
      <Hero />
    </div>
  );
}
