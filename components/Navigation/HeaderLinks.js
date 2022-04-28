import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderLink } from "./HeaderLink";
import classNames from "clsx";

export const HeaderLinks = ({ links }) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (!links) {
    return null;
  }

  // Find the "middle" of the links array and split it into a left and right links
  // so we can render the logo in the center
  const slicePoint = Math.ceil(links.length / 2);
  const leftSideLinks = links.slice(0, slicePoint);
  const rightSideLinks = links.slice(slicePoint, links.length);
  const getIsActiveLink = (currentRoute, linkUrl) => {
    // Basic - if the current route is the link being rendered
    if (currentRoute === linkUrl) {
      return true;
    }

    // Complex-ish - if the current route is a descendent of the link being rendered
    const currentRouteHierarchy = router.asPath.split("/").filter((link) => link !== "");
    const linkHierarchy = linkUrl.split("/").filter((link) => link !== "");

    // If the current route hierarchy has the current page in it, mark this as active
    const isActive = currentRouteHierarchy.includes(linkHierarchy[linkHierarchy.length - 1]);

    return isActive;
  };

  const handleMobileNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const mobileNavClasses = classNames({
    "translate-x-0": isNavOpen,
    "translate-x-full": !isNavOpen,
  });

  const navToggleCenterBurgerLineClasses = classNames({
    hidden: isNavOpen,
    inline: !isNavOpen,
  });

  const navToggleClasses = classNames({
    "after:rotate-45": isNavOpen,
    "before:-rotate-45": isNavOpen,
    "after:w-[26px]": isNavOpen,
    "before:w-[26px]": isNavOpen,
  });

  return (
    <nav className="">
      <div className="container mx-auto md:flex justify-around items-center">
        <div className="lg:grow md:order-2">
          <Link href="/">
            <a className="block w-40 lg:w-56 m-auto px-3 py-5">
              <HeaderLogo />
            </a>
          </Link>
          <button
            type="button"
            className={`md:hidden fixed top-5 right-5 z-10 w-6 h-5 after:transition-transform after:content-[' '] after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:origin-left after:bg-darkPurple before:transition-transform before:content-[' '] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:origin-left before:bg-darkPurple ${navToggleClasses}`}
            onClick={handleMobileNavToggle}
          >
            <span
              className={`absolute top-[.55rem] left-0 w-full h-0.5 bg-darkPurple ${navToggleCenterBurgerLineClasses}`}
            ></span>
            <span className="hidden">toggle navigation</span>
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 left-0 bottom-0 w-full transition-transform px-6 pt-20 pb-12 bg-white/95 ${mobileNavClasses}`}
        >
          <ul className="text-right">
            {links.map((link) => (
              <li className="mb-2" key={link.text}>
                <HeaderLink link={link} isActive={getIsActiveLink(router.asPath, link.url)} />
              </li>
            ))}
          </ul>
        </div>

        <div className="grow basis-60 md:flex justify-start md:order-1 hidden">
          {leftSideLinks?.map((link) => (
            <HeaderLink key={link.text} link={link} isActive={getIsActiveLink(router.asPath, link.url)} />
          ))}
        </div>
        <div className="grow basis-60 md:flex justify-end md:order-3 hidden">
          {rightSideLinks?.map((link) => (
            <HeaderLink key={link.text} link={link} isActive={getIsActiveLink(router.asPath, link.url)} />
          ))}
        </div>
      </div>
    </nav>
  );
};
