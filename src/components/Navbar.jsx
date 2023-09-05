import React from "react";
import data from "../data/data";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const menuVariables = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    scaleY: 0,
  },
};

const Navbar = () => {
  return (
    <>
      <motion.ul
        variants={menuVariables}
        initial="initial"
        animate="animate"
        exit="exit"
        className="md:hidden w-full py-1.5 bg-slate-900 rounded-md mt-2 border border-gray-200 transition-all ease-in-out duration-1000"
      >
        {data.headerLinks.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.href}
                className={`font-lora font-semibold text-[#969da4] hover:text-rose-600 opacity-80 md:hover:opacity-100 pl-3.5 transition-all whitespace-nowrap`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default Navbar;
