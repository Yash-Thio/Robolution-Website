'use client'
import Link from 'next/link'
import React from "react";
import { useState } from 'react';

export default function Navbar() {

  const [isLoginOpen,setIsLoginOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleLogin(){
    setIsLoginOpen((cur) => !cur)
  }

  function handleMouseEnter() {
    setIsDropdownOpen(true);
  }

  function handleMouseLeave() {
    setIsDropdownOpen(false);
  }

  return (
    <nav className="flex gap-20 text-white fixed top-0 z-50 w-full px-4 py-4">
      {/* <img className = " w-16" src="/images/Naya-removebg-.png" alt="robolution" /> */}
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img className="w-16" src="/images/Naya-removebg-.png" alt="robolution" />
        <div className={`absolute left-0 top-16 bg-black p-4 rounded-md shadow-lg transition-all duration-800 ease-in-out ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook-logo.png" alt="Facebook" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter-logo.png" alt="Twitter" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/robolution.bitm/" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-logo.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-screen justify-between">
        <ul className="flex list-image-none gap-10 font-bold justify-items-start">
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/">
                Home
              </Link>  
            </button>
          </li>
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/Team">
                Team
              </Link>  
            </button>
          </li>
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/Achievements">
                Achievements
              </Link>
            </button>
          </li>
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/Events">
                Events
              </Link>
            </button>
          </li>
        </ul>

        <ul className="flex list-image-none gap-10 justify-items-end">
          <li>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Admin
            </button>
          </li>
          <li>
            <button onClick={handleLogin} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <Link href="/Login">
                Login
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
