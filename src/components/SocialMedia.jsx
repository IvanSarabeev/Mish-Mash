import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SocialMedia = ({ socialHref, Icon }) => {
  return (
    <>
      <Link
        key={socialHref.id}
        to={socialHref.link}
        target="_blank"
        className="text-[#0d1117] bg-rose-600 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#1a222e] hover:text-rose-600"
      >
        {Icon}
      </Link>
    </>
  );
};

export default SocialMedia;
