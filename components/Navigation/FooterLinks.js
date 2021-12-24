import Link from "next/link";

export const FooterLinks = ({ links }) => {
  return (
    <div className="container mx-auto">
      <ul>
        {links?.map((link) => (
          <li key={`link-${link.text}`}>
            <Link href={link.url}>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
