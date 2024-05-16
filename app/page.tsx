import Head from "next/head";
import Navbar from "./Components/Navigation/Navbar";
import Hero from "./Components/Landing-page/Hero";


export default function main() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
    
  );
}
