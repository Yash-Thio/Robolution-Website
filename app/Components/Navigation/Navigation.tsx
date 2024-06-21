"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = () => {
    console.log("toggle clicked");
    setIsOpen(!isOpen);
  };

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);  // Set mounted to true once the component has mounted
      window.addEventListener("resize", updateWidth);
      updateWidth();  // Initial call to set width correctly

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }
  }, []);

  if (!isMounted) {
    // Render nothing until the component has mounted
    return null;
  }

  return width < 768 ? (
    <Sidebar isOpen={isOpen} toggle={toggle} />
  ) : (
    <Navbar />
  );
};

export default Navigation;
