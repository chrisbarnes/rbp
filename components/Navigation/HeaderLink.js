import React from "react";
import Link from "next/link";

export const HeaderLink = ({ link }) => {
  return (
    <span className="uppercase text-sm font-serif" key={`link-${link.text}`}>
      <Link href={link.url}>
        <a className="px-2 lg:px-4 py-1">{link.text}</a>
      </Link>
    </span>
  );
};
