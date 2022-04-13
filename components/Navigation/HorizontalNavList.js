import { NavListLink } from "./NavListLink";

export const HorizontalNavList = ({ links }) => {
  return (
    <nav className="mb-16 bg-lavender/30 p-4">
      <ul className="flex flex-col md:flex-row justify-center">
        {links.map((link, index) => (
          <li className="py-2 md:border-r border-lightPurple last:border-r-0" key={`${link.text}-${index}`}>
            <NavListLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
