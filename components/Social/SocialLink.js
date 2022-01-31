import React from "react";
import { FacebookLogo } from "./FacebookLogo";
import { PinterestLogo } from "./PinterestLogo";
import { InstagramLogo } from "./InstagramLogo";

export const SocialLink = ({ type }) => {
  switch (type) {
    case "Facebook":
      return (
        <a
          href="https://www.facebook.com/raebarnesphoto"
          rel="noreferrer"
          target="_blank"
        >
          <FacebookLogo />
        </a>
      );

    case "Pinterest":
      return (
        <a
          href="https://www.pinterest.com/raebarnes"
          rel="noreferrer"
          target="_blank"
        >
          <PinterestLogo />
        </a>
      );

    case "Instagram":
      return (
        <a
          href="https://www.instagram.com/raebarnesphoto/"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramLogo />
        </a>
      );

    default:
      break;
  }
};
