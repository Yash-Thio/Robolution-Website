"use client";
import React, { useRef } from "react";
import { Label } from "../Components/ui/label";
import { Input } from "../Components/ui/input";
import { cn } from "@/utils/cn";
import { Boxes } from "../Components/ui/background-box";
import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isLogin } from "../Store/Atoms/Islogin";
import { isAdmin } from "../Store/Selectors/isAdmin";
import Link from "next/link";

export default function SignupFormDemo() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const setIsLogin = useSetRecoilState(isLogin);
  const admin = useRecoilValue(isAdmin);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     const data = {
      
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    
    }
    try {
      const response = await axios.post('http://localhost:5000/Login', data);
      console.log('Form submitted successfully:', response.data.token);
      localStorage.setItem('jwt', response.data.token);
      setIsLogin(true);
      window.location.replace("http://localhost:3000/")
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className=" h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
    <div className=" max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black z-20">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Robolution
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to access member controls
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="James Bond" type="text" ref={nameRef} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@bitmesra.ac.in" type="email" ref={emailRef} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" ref={passwordRef} />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        
      </form>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
