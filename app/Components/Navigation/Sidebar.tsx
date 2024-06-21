import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationLink from "./NavigationLink";
import {
    HomeIcon,
    UserGroupIcon,
    CubeTransparentIcon,
    NewspaperIcon
  } from "@heroicons/react/24/outline"


const containerVariants = {
    close: {
      width: "0rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      width: "16rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  }
  
  const svgVariants = {
    close: {
      rotate: 360,
    },
    open: {
      rotate: 180,
    },
  }

function Sidebar(props : any) {

    const [isOpen, setIsOpen] = useState(false)

  const containerControls = useAnimationControls()
  const svgControls = useAnimationControls()

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open")
      svgControls.start("open")
    } else {
      containerControls.start("close")
      svgControls.start("close")
    }
  }, [isOpen])

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="bg-neutral-900 flex flex-col z-10 gap-20 absolute top-0 left-0 h-full shadow shadow-neutral-600"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <img className=" w-14 h-14 rounded-full" src="/images/Naya-removebg-.png" alt="robolution" />
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <NavigationLink name="Home" to="/">
            <HomeIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="About" to="/About">
            <NewspaperIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Team" to="/Team">
            <UserGroupIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Events" to="/Events">
            <CubeTransparentIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>
        <div className="flex flex-row gap-8 pl-4">
          
              <a href="https://www.facebook.com/TeamRobolution" target="_blank" rel="noopener noreferrer">
                <img src="/images/Facebook_Logo_Primary.png" alt="Facebook" className="w-8 h-8" />
              </a>
            
            
              <a href="https://www.linkedin.com/company/robolution-bit-mesra/" target="_blank" rel="noopener noreferrer">
                <img src="/images/In-Blue-128@2x.png" alt="Linkedin" className="w-8 h-8" />
              </a>
            
            
              <a href="https://www.instagram.com/robolution.bitm/" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-1675670_1280.png" alt="Instagram" className="w-8 h-8" />
              </a>
            
        </div>
        </motion.nav>
    </>
  )
}


export default Sidebar