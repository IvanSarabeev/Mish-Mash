import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IconEnvelope from "../../assets/icons/EnvelopIcon";
import FullLogo from "../../assets/images/base-logo.png";

const Hero = () => {
  return (
    <main
      id="home-section"
      className="relative z-10 h-full w-auto flex flex-col items-center mx-auto justify-center py-14 md:py-24"
    >
      <div className="absolute -z-10 left-[65%] top-[15%] lg:top-[10%] lg:left-[50%] rounded-3xl animate-slower-spin bg-gradient-to-tr to-[#1a222e] from-[#8c3c83] w-20 h-20 lg:w-28 lg:h-28"></div>
      <div className="absolute -z-10 left-[35%] top-[-100%] lg:top-[60%] lg:left-[90%] rounded-3xl animate-slower-spin bg-gradient-to-tl from-[#1a222e] to-[#e11d48] w-20 h-20 lg:w-28 lg:h-28"></div>
      <section className="gap-y-14 md:gap-y-10 flex-wrap mx-auto flex flex-col lg:flex-row items-center gap-x-10 mb-0 md:mb-10">
        <article className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="relative z-10 font-extrabold font-playful text-5xl sm:text-6xl md:text-7xl leading-10 mb-6 text-rose-600"
          >
            Mish Mash
            <div className="absolute -z-10 left-[-15%] top-[-40%] rounded-t-2xl rounded-s-3xl rounded-e-3xl animate-slower-spin rounded-b-lg bg-gradient-to-tr from-[#1a222e] to-[#e11d48] w-20 h-20"></div>
          </motion.h1>
          <motion.h2
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6 }}
            className="font-semibold font-martel text-2xl md:text-4xl mb-2 sm:mb-4 md:mb-6 indent-0 md:indent-2"
          >
            We are delighted to introduce
          </motion.h2>
          <motion.div
            initial={{ scale: 1.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4 }}
            className="font-medium px-3 md:px-0 font-lora text-lg md:text-xl leading-7 md:leading-8 break-words antialiased"
          >
            <p className="max-w-2xl min-w-fit indent-0 md:indent-2">
              Our street food business that specializes in cooking
              traditional&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <strong className="text-rose-600 underline underline-offset-4">
                <b className="text-[20px]">B</b>ulgarian
              </strong>
              dishes, as well as gourmet burgers and fully loaded hotdogs.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            type="button"
            className="text-white bg-gradient-to-tr from-[#7f4091] to-rose-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-slate-800 font-medium rounded-lg text-md px-5 py-2.5 mt-4"
          >
            <Link
              to="mailto:Mishmash.catering@yahoo.com"
              target="_blank"
              className="flex gap-x-2 items-center font-lora"
            >
              Contact Us <IconEnvelope />
            </Link>
          </motion.button>
        </article>
        <aside className="relative block">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            src={FullLogo}
            alt="logo"
            className="h-auto w-72 md:w-96 lg:w-[425px] aspect-auto object-cover"
          />
        </aside>
      </section>
    </main>
  );
};

export default Hero;
