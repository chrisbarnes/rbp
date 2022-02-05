import React from "react";
import { JumpLink } from "./JumpLink";

export const JumpLinks = ({ links }) => {
  return (
    <nav className="mb-16 bg-lavender/30 p-4">
      <ul className="flex justify-center">
        {links.map((link, index) => (
          <li
            className="py-2 border-r border-lightPurple last:border-r-0"
            key={`${link.text}-${index}`}
          >
            <JumpLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
