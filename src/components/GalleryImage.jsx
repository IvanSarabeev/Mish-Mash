import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "./FadeAnimation";

const GalleryImage = ({ index, src, onClick }) => {
  return (
    <>
      <motion.img
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
        key={index}
        className="h-20 w-full md:h-32 md:w-fit rounded-lg aspect-auto object-cover hover:border-2 hover:border-rose-600 focus:border-rose-600 hover:cursor-pointer"
        src={src}
        alt="gallery-collection"
        onClick={onClick}
      />
    </>
  );
};

export default GalleryImage;
