import React, { useEffect } from "react";
import data from "../data/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const cardAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      cardAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      cardAnimation.start({ x: "-80vw" });
    }
  }, [inView, cardAnimation]);

  return (
    <>
      <section
        ref={ref}
        className="h-fit max-w-7xl flex items-center justify-center flex-wrap gap-4 md:gap-10 mx-auto px-2"
      >
        {data.serviceContainer.map((item, index) => {
          return (
            <motion.div
              animate={cardAnimation}
              key={index}
              className="service-container sm:min-w-80"
            >
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-paragraph">{item.text}</p>
            </motion.div>
          );
        })}
      </section>
    </>
  );
};

export default ServiceCard;
