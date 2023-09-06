import React from "react";
import data from "../../data/data";
import Card from "../../components/Card";
import { ReactComponent as SvgIcon } from "../../assets/svgs/shape.svg";

const Menu = () => {
  return (
    <>
      <section
        id="menu-section"
        className="relative z-10 pt-10 md:py-10 w-full min-h-screen flex flex-col justify-center items-center text-white bg-[#ac3363]"
      >
        <div className="absolute z-50 top-0 left-0 w-full overflow-hidden leading-none bg-[#ac3363] fill-[#1a222e]">
          <SvgIcon />
        </div>
        <h3 className="sub-heading z-50 font-semibold font-martel text-[#0d1117]">
          Menu
        </h3>
        <div className="gap-4 gap-y-6 grid col-span-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center px-4 mx-auto mt-10 md:my-10 text-[#0d1117]">
          {data.menuItems.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
        <article className="mb-32 flex gap-y-0 flex-col md:flex-row justify-center items-center mx-auto gap-x-20">
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50 bg-[#1a222e] fill-[#ac3363]">
            <SvgIcon />
          </div>
        </article>
      </section>
    </>
  );
};

export default Menu;
