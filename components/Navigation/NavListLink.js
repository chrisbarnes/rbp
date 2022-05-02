import Link from "next/link";
import { useRouter } from "next/router";

export const NavListLink = ({ text, url }) => {
  const router = useRouter();

  return (
    <Link href={url}>
      <a
        className={`font-sans uppercase text-plum text-sm px-7 no-underline ${
          router.asPath === url ? "font-bold" : null
        } focus:outline focus:outline-2 focus:outline-plum`}
      >
        {text}
      </a>
    </Link>
  );
};
