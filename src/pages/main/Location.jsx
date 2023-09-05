import React from "react";
import data from "../../data/data";
import { Link } from "react-router-dom";
import Google_API_URL from "../../api/apikeys";

const Location = () => {
  return (
    <section
      id="location-section"
      className="relative z-10 w-auto max-h-min my-10 flex flex-col items-center justify-center gap-y-12 lg:gap-x-20 lg:flex-row mx-auto"
    >
      <div className="text-right">
        <h3 className="sub-heading relative z-20 text-center font-semibold font-lora mb-2 sm:mb-3 md:mb-6">
          Location & <strong className="text-rose-600">Contact</strong>
        </h3>
        <div className="font-lora text-base md:text-lg flex flex-col items-center justify-center lg:items-end lg:justify-end leading-6 pt-6 gap-y-3">
          {data.websiteLinks.map((link, index) => {
            return (
              <Link key={index} to={link.link}>
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <iframe
          loading="lazy"
          src={Google_API_URL}
          allowFullScreen={true}
          title="Bath-United Kingdom"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[300px] sm:w-[500px] md:w-[550px] h-[300px] lg:w-[500px] rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
