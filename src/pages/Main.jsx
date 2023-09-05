import React, { useState, useEffect } from "react";
import Header from "./main/Header";
import Hero from "./main/Hero";
import ServiceCard from "../components/ServiceCard";
import About from "./main/About";
import Menu from "./main/Menu";
import Gallery from "./main/Gallery";
import Location from "./main/Location";
import Survey from "./main/Survey";
import Footer from "./main/Footer";
import ScrollToTop from "../components/ScrollTop";

const Home = () => {
  const [scrollPosition, setScrollPostion] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollPostion(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full text-[#969da4] bg-[#1a222e]">
      <Header />
      <Hero />
      <ServiceCard />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <Survey />
      <Footer />
      <ScrollToTop scrollToTop={scrollToTop} scrollPosition={scrollPosition} />
    </div>
  );
};

export default Home;
