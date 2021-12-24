import { FooterLinks } from "../Navigation/FooterLinks";

export const Footer = ({ items }) => {
  return (
    <div>
      <FooterLinks links={items} />
    </div>
  );
};
