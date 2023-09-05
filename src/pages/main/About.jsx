import React from "react";
import { motion } from "framer-motion";
import StarIcon from "../../assets/icons/StarIcon";
import FoodRating from "../../assets/images/rating.jpg";

const About = () => {
  return (
    <section
      id="about-section"
      className="h-min py-8 md:pt-12 lg:pt-14 w-auto flex flex-col items-center justify-center"
    >
      <article className="flex flex-col-reverse items-center justify-evenly lg:flex-row gap-x-10 sm:gap-x-20 gap-y-10 sm:gap-y-6">
        <img
          src={FoodRating}
          alt="hygiene-rating"
          className="h-52 sm:h-60 md:h-72 xl:h-80 w-auto rounded-md object-cover aspect-auto px-4 sm:px-2"
        />
        <aside className="flex flex-col mx-auto px-2 lg:px-0">
          <h3 className="sub-heading z-20 text-center lg:text-right font-semibold font-martel mb-2 sm:mb-3 md:mb-6">
            <span className="flex gap-x-1 items-center justify-center lg:justify-end">
              {Array.from({ length: 5 }).map((_, index) => {
                return <StarIcon key={index} />;
              })}{" "}
              About <strong className="text-rose-600">Us</strong>
            </span>
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4, type: "spring" }}
            className="min-w-min max-w-lg font-lora relative z-20 text-center lg:text-justify indent-2 leading-7 text-sm md:text-base"
          >
            <p>
              At MishMash, we believe in using only the best ingredients and
              cooking techniques to create delicious and authentic food that our
              customers will love. We are delighted to introduce our street food
              business that specializes in cooking traditional Bulgarian dishes
              We use only the freshest ingredients to ensure that our food is as
              authentic and delicious as possible.
            </p>
            <p>
              We are passionate about sharing the flavors of Bulgaria with the
              world, and we hope that you will join us in this culinary journey.
            </p>
          </motion.div>
        </aside>
      </article>
    </section>
  );
};

export default About;
