'use client';

import { isLogin } from '@/app/Store/Atoms/Islogin';
import { isAdmin } from '@/app/Store/Selectors/isAdmin';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const loggedIn = useRecoilValue(isLogin);
  const setLoggedIn = useSetRecoilState(isLogin);
  const admin = useRecoilValue(isAdmin);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleMouseEnter() {
    setIsDropdownOpen(true);
  }

  function handleMouseLeave() {
    setIsDropdownOpen(false);
  }

  async function Logout() {
    localStorage.removeItem('jwt');
    await setLoggedIn(false);
    console.log("logged out");
    console.log(admin + " after logging out");
  }

  return (
    <nav className="flex gap-20 text-white fixed top-0 z-50 w-full px-4 py-4">
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img className="w-16" src="/images/Naya-removebg-.png" alt="robolution" />
        <div
          className={`absolute left-0 top-16 bg-black p-4 rounded-md shadow-lg transition-all duration-800 ease-in-out ${
            isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://www.facebook.com/TeamRobolution" target="_blank" rel="noopener noreferrer">
                <img src="/images/Facebook_Logo_Primary.png" alt="Facebook" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/robolution-bit-mesra/" target="_blank" rel="noopener noreferrer">
                <img src="/images/In-Blue-128@2x.png" alt="Linkedin" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/robolution.bitm/" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-1675670_1280.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-screen justify-between">
        <ul className="flex list-image-none gap-10 font-bold justify-items-start">
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/About">About Us</Link>
            </button>
          </li>
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/Team">Team</Link>
            </button>
          </li>
          <li>
            <button className="font-apple-system font-semibold hover:text-amber-800 pt-4">
              <Link href="/Events">Events</Link>
            </button>
          </li>
        </ul>

        <ul className="flex list-image-none gap-10 justify-items-end">
          {isClient && loggedIn && admin === true && (
            <li>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Admin
              </button>
            </li>
          )}
          {isClient && !loggedIn && (
            <li>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <Link href="/Login">Login</Link>
              </button>
            </li>
          )}
          {isClient && loggedIn && (
            <li>
              <Link href="/"><button
                onClick={Logout}
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Logout
              </button></Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
