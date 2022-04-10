import { useEffect, useRef } from "react";
import { HeaderLinks } from "../Navigation/HeaderLinks";
import { HeaderImage } from "../Images/HeaderImage";
import styles from "./header.module.css";
import classNames from "clsx";
import { Logo } from "../Brand/Logo";

export const Header = ({ items, image, isStorybook, showLogo }) => {
  const fixedNavRef = useRef();
  const sentinelRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => fixedNavRef?.current?.classList.toggle(styles["fixed-nav-stuck"], e.intersectionRatio < 1),
      { threshold: [1] }
    );

    // Observe when the sentinel scrolls past the viewport
    observer.observe(sentinelRef.current);
  }, []);
  const headerClasses = classNames({
    "mb-14": !showLogo,
    "mb-20": showLogo,
  });

  return (
    <header className={headerClasses}>
      <div className="relative">
        <div ref={sentinelRef}></div>
        <div className={styles["fixed-nav"]} ref={fixedNavRef}>
          <HeaderLinks links={items} />
        </div>
        <div className="w-full md:h-screen overflow-hidden relative">
          {image && image.url && <HeaderImage image={image} preserveUrl={isStorybook} />}
        </div>
        {showLogo && (
          <div className="w-40 h-32 relative" style={{ left: "calc(50% - 5rem)", marginTop: "-67px" }}>
            <Logo />
          </div>
        )}
      </div>
    </header>
  );
};
