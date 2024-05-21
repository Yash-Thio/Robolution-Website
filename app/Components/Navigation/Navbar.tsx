'use client'
import Link from 'next/link'
import React from "react";
import { useState } from 'react';

export default function Navbar() {

  const [isLoginOpen,setIsLoginOpen] = useState(false);

  function handleLogin(){
    setIsLoginOpen((cur) => !cur)
  }

  return (
    <nav className="flex gap-20 text-white fixed top-0 z-50 w-full px-4 py-4">
      <img className = " w-16" src="/images/Naya-removebg-.png" alt="robolution" />
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
