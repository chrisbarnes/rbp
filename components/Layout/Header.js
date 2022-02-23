import { useEffect, useRef } from "react";
import { HeaderLinks } from "../Navigation/HeaderLinks";
import { HeaderImage } from "../Images/HeaderImage";
import styles from "./header.module.css";

export const Header = ({ items, image, isStorybook }) => {
  const fixedNavRef = useRef();
  const sentinelRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) =>
        fixedNavRef?.current?.classList.toggle(
          styles["fixed-nav-stuck"],
          e.intersectionRatio < 1
        ),
      { threshold: [1] }
    );

    // Observe when the sentinel scrolls past the viewport
    observer.observe(sentinelRef.current);
  }, []);

  return (
    <header className="mb-14">
      <div className="relative">
        <div ref={sentinelRef}></div>
        <div className={styles["fixed-nav"]} ref={fixedNavRef}>
          <HeaderLinks links={items} />
        </div>
        <div className="w-full h-screen overflow-hidden">
          {image && image.url && (
            <HeaderImage image={image} preserveUrl={isStorybook} />
          )}
        </div>
      </div>
    </header>
  );
};
