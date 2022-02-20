import { FooterLinks } from "../Navigation/FooterLinks";
import { FooterLogo } from "../Navigation/FooterLogo";
import { SocialLinks } from "../Social/SocialLinks";
import { InstagramPosts } from "../Images/InstagramPosts";

export const Footer = ({ items, instagramPosts }) => {
  return (
    <>
      {instagramPosts && <InstagramPosts posts={instagramPosts} />}
      <footer>
        <div className="mx-auto flex">
          <section className="basis-2/3 p-12 bg-grayPurple">
            <div className="w-28 m-auto mb-10">
              <FooterLogo />
            </div>
            <p className="text-center text-xl font-serif w-2/3 m-auto mb-8">
              Rae Barnes Photography provides playful portraits and heirloom
              artwork for busy parents in the greater Philadelphia region.
            </p>
            <div className="mb-8">
              <SocialLinks />
            </div>
            <FooterLinks links={items} />
          </section>
          <section className="basis-1/3 p-12 bg-lightPurple">
            <p>subscribe to the newsletter form goes here.</p>
          </section>
        </div>
      </footer>
    </>
  );
};
