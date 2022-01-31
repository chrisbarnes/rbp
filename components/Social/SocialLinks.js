import React from "react";
import { SocialLink } from "./SocialLink";

export const SocialLinks = () => {
  return (
    <ul className="flex justify-center">
      <li className="w-6 h-6 mx-4">
        <SocialLink type="Facebook" />
      </li>
      <li className="w-6 h-6 mx-4">
        <SocialLink type="Pinterest" />
      </li>
      <li className="w-6 h-6 mx-4">
        <SocialLink type="Instagram" />
      </li>
    </ul>
  );
};
