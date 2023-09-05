import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "./FadeAnimation";

const Card = ({ item, index }) => {
  return (
    <motion.article
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      key={index}
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.6, easings: ["easeIn", "easeInOut"] }}
        className="max-w-sm sm:min-w-min bg-gray-800 rounded-lg shadow-2xl"
      >
        <img
          className="w-full h-36 sm:h-40 md:h-52 lg:h-60 aspect-auto object-cover rounded-t-lg"
          src={item.img}
          alt={item.alt}
        />
        <article className="p-5 flex flex-col">
          <h5 className="font-martel font-semibold text-2xl text-left text-gray-400 mb-2">
            {item.title}
          </h5>
          <p className="mb-3 font-lora font-normal text-justify leading-7 md:leading-6 max-w-sm text-gray-300 indent-1">
            {item.text}
          </p>
        </article>
      </motion.div>
    </motion.article>
  );
};

export default Card;
