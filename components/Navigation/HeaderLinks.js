import Link from "next/link";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderLink } from "./HeaderLink";

export const HeaderLinks = ({ links }) => {
  // Find the "middle" of the links array and split it into a left and right links
  // so we can render the logo in the center
  const slicePoint = Math.ceil(links.length / 2);
  const leftSideLinks = links.slice(0, slicePoint);
  const rightSideLinks = links.slice(slicePoint, links.length);

  return (
    <nav className="bg-purple-600/80 focus-within:bg-white transition-colors">
      <div className="container mx-auto flex justify-around items-center">
        <div className="grow basis-60 flex justify-start">
          {leftSideLinks?.map((link) => (
            <HeaderLink key={link.text} link={link} />
          ))}
        </div>
        <div className="grow">
          <Link href="/">
            <a className="block w-56 m-auto px-3 py-5">
              <HeaderLogo />
            </a>
          </Link>
        </div>
        <div className="grow basis-60 flex justify-end">
          {rightSideLinks?.map((link) => (
            <HeaderLink key={link.text} link={link} />
          ))}
        </div>
      </div>
    </nav>
  );
};
