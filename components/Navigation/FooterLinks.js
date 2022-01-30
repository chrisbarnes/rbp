import Link from "next/link";

export const FooterLinks = ({ links }) => {
  return (
    <ul className="justify-center font-sans flex">
      {links?.map((link) => (
        <li key={`link-${link.text}`}>
          <Link href={link.url}>
            <a className="px-2 py-1 uppercase text-xs">{link.text}</a>
          </Link>{" "}
          |
        </li>
      ))}
      <li>
        <span className="px-2 py-1 uppercase text-xs">
          &copy;2022 Rae Barnes Photography
        </span>{" "}
        |
      </li>
      <li className="px-2 py-1 uppercase text-xs">
        Brand + Site Design by Pop and Grey
      </li>
    </ul>
  );
};
