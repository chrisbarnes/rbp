import React from "react";
import Link from "next/link";
import classNames from "clsx";
import styles from "./header-link.module.css";

export const HeaderLink = ({ link, isActive }) => {
  const linkClasses = classNames({
    [styles["header-link"]]: true,
    [styles["header-link-active"]]: isActive,
  });

  return (
    <span
      className="uppercase text-sm font-serif left-"
      key={`link-${link.text}`}
    >
      <Link href={link.url}>
        <a className={linkClasses} style={{}}>
          {link.text}
        </a>
      </Link>
    </span>
  );
};
