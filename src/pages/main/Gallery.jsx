import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GalleryImage from "../../components/GalleryImage";
import GalleryOne from "../../assets/images/gallery-one.jpg";
import GalleryTwo from "../../assets/images/gallery-two.jpg";
import GalleryThree from "../../assets/images/gallery-three.jpg";
import GalleryFour from "../../assets/images/gallery-four.jpg";
import GalleryFive from "../../assets/images/gallery-five.jpg";
import GallerySix from "../../assets/images/gallery-six.jpg";

const galleryImages = [
  GalleryOne,
  GalleryTwo,
  GalleryThree,
  GalleryFour,
  GalleryFive,
  GallerySix,
];

const Gallery = () => {
  const [mainImage, setMainImage] = useState(GalleryTwo);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const imgAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      imgAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    }
    if (!inView) {
      imgAnimation.start({ x: "-100vw" });
    }
  }, [inView, imgAnimation]);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <section
      id="gallery-section"
      className="relative z-10 my-6 md:my-8 lg:my-0 mx-auto w-full min-h-screen flex flex-col justify-center items-center"
    >
      <h3 className="sub-heading z-10 font-semibold font-martel mb-4 md:mb-6 lg:mb-8 text-rose-600">
        Gallery <strong className="text-[#969ca3]">from Events </strong>
      </h3>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 px-6">
        <div>
          <motion.img
            src={mainImage}
            alt="main-gallery"
            className="main-gallery-img"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-2 lg:gap-x-4">
          {galleryImages.map((imgSrc, index) => (
            <GalleryImage
              key={index}
              index={index}
              src={imgSrc}
              onClick={() => handleImageClick(imgSrc)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
