import { FooterLinks } from "../Navigation/FooterLinks";
import { FooterLogo } from "./FooterLogo";

export const Footer = ({ items }) => {
  return (
    <footer>
      <div className="container mx-auto flex">
        <section className="basis-2/3 p-12 bg-grayPurple">
          <div className="w-28 m-auto mb-12">
            <FooterLogo />
          </div>
          <p className="text-center text-xl font-serif w-2/3 m-auto mb-8">
            Rae Barnes Photography provides playful portraits and heirloom
            artwork for busy parents in the greater Philadelphia region.
          </p>
          <p className="text-center">social links go here</p>
          <FooterLinks links={items} />
        </section>
        <section className="basis-1/3 p-12 bg-lightPurple">
          <p>subscribe to the newsletter form goes here.</p>
        </section>
      </div>
    </footer>
  );
};
