import React from "react";
import { Link } from "react-router-dom";
import IconArrowTop from "../assets/icons/ArrowTopIcon";

const ScrollButton = ({ scrollToTop, scrollPosition }) => {
  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          scrollPosition > 0 ? "fixed z-50" : ""
        } bottom-[2%] right-[2%]`}
      >
        <Link
          to="/"
          className="text-white flex items-center space-x-4 gap-2 font-medium rounded-full text-sm p-2.5 text-center bg-[#0d1117] hover:bg-rose-600 hover:outline-slate-800 hover:outline"
        >
          <IconArrowTop />
        </Link>
      </button>
    </>
  );
};

export default ScrollButton;
