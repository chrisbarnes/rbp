import Link from "next/link";

export const FooterLinks = ({ links }) => {
  return (
    <ul className="justify-center font-sans flex flex-wrap">
      {links?.map((link, index) => (
        <li key={`link-${link.text}`}>
          <Link href={link.url}>
            <a className="px-2 py-1 uppercase text-xs no-underline focus:outline focus:outline-2 focus:outline-plum">
              {link.text}
            </a>
          </Link>{" "}
          <span
            className={`${
              index === links.length - 1 ? "hidden lg:inline" : ""
            }`}
          >
            |
          </span>
        </li>
      ))}
      <li className="basis-full lg:basis-auto text-center">
        <span className="px-2 py-1 uppercase text-xs">
          &copy;{`${new Date().getFullYear()}`} Rae Barnes Photography
        </span>{" "}
        <span className="hidden lg:inline">|</span>
      </li>
      <li className="px-2 py-1 uppercase text-xs basis-full lg:basis-auto text-center">
        Brand + Site Design by Pop and Grey
      </li>
    </ul>
  );
};
