import React, { useState } from "react";
import data from "../../data/data";
import Logo from "../../assets/images/logo.png";
import IconXmark from "../../assets/icons/XmarkIcon";
import IconBar from "../../assets/icons/NavbarIcon";
import Navbar from "../../components/Navbar";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const { scrollY } = useScroll(); //absolute scroll progress over the entire page

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      //latest > 150 px padding
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [hidden, setHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.header
      variants={{
        visibility: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, type: "spring", ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className="sticky top-0 w-full md:flex justify-between items-center px-5 md:px-8 py-2.5 z-50 bg-[#0d1117] border-b border-gray-600 transition-all ease-in-out delay-1000"
    >
      <img
        src={Logo}
        alt="logo"
        className="w-16 sm:w-20 md:w-[88px] lg:w-24 h-auto aspect-auto object-cover"
      />
      <button
        type="button"
        onClick={handleToggle}
        className="md:hidden absolute top-3.5 right-5 bg-gray-800 p-1.5 rounded transition-all ease-in-out duration-500 delay-500"
      >
        {isActive ? <IconXmark /> : <IconBar />}
      </button>
      <nav className="hidden items-end justify-end md:flex w-full gap-4 xl:gap-6 text-sm lg:text-base">
        <ul className="flex items-center">
          {data.headerLinks.map((item) => {
            return (
              <motion.li
                initial={{
                  opacity: 0,
                  translateX: -50,
                  translateY: -50,
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  translateY: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: item * 0.25,
                  type: "spring",
                }}
                key={item.id}
              >
                <Link
                  to={item.href}
                  className={`font-lora font-semibold bg-opacity-50 py-2 md:py-0 pl-1.5 lg:pl-3.5 text-gray-400 hover:text-rose-600 opacity-80 md:hover:opacity-100 whitespace-nowrap`}
                >
                  {item.title}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
      {isActive ? <Navbar /> : hidden}
    </motion.header>
  );
};

export default Header;
