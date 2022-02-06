import { useRef } from "react";

export const JumpLink = ({ text, section }) => {
  const linkRef = useRef();
  const handleClick = (event) => {
    event.preventDefault();

    const sectionToScrollTo = document.querySelector(event?.target?.hash);

    sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      className="font-sans uppercase text-plum text-sm px-7 no-underline"
      href={`#${section}`}
      ref={linkRef}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};
