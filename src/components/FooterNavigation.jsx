import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const FooterNavigation = ({ item }) => {
  return (
    <>
      <li key={item.id}>
        <Link
          to={item.href}
          className="ml-2 font-semibold text-base hover:text-rose-600"
        >
          {item.title}
        </Link>
      </li>
    </>
  );
};

export default FooterNavigation;
