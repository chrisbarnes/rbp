import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderLink } from "./HeaderLink";

export const HeaderLinks = ({ links }) => {
  const router = useRouter();

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
    const currentRouteHierarchy = router.asPath
      .split("/")
      .filter((link) => link !== "");
    const linkHierarchy = linkUrl.split("/").filter((link) => link !== "");

    // If the current route hierarchy has the current page in it, mark this as active
    const isActive = currentRouteHierarchy.includes(
      linkHierarchy[linkHierarchy.length - 1]
    );

    return isActive;
  };

  return (
    <nav className="">
      <div className="container mx-auto md:flex justify-around items-center">
        <div className="lg:grow md:order-2">
          <Link href="/">
            <a className="block w-40 lg:w-56 m-auto px-3 py-5">
              <HeaderLogo />
            </a>
          </Link>
        </div>
        <div className="grow basis-60 flex justify-start md:order-1">
          {leftSideLinks?.map((link) => (
            <HeaderLink
              key={link.text}
              link={link}
              isActive={getIsActiveLink(router.asPath, link.url)}
            />
          ))}
        </div>
        <div className="grow basis-60 flex justify-end md:order-3">
          {rightSideLinks?.map((link) => (
            <HeaderLink
              key={link.text}
              link={link}
              isActive={getIsActiveLink(router.asPath, link.url)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
