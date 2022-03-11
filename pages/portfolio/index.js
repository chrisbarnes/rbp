import { useRouter } from "next/router";

const REDIRECT_PAGE = "/portfolio/babies";

export default function Page() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    router.push(REDIRECT_PAGE);
    return null;
  }

  return <div></div>;
}
