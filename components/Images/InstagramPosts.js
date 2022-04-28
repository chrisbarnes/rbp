import { InstagramImage } from "./InstagramImage";
import { InstagramLogo } from "../Social/InstagramLogo";

export const InstagramPosts = ({ posts }) => {
  return (
    <div className="pb-32 flex flex-col md:flex-row max-w-7xl mx-auto">
      <div className="md:w-3/12 mb-16 md:mb-0 text-lightPurple text-center flex justify-center items-center flex-col">
        <span className="uppercase text-xl mb-2">Follow us at</span>
        <a
          className="font-serif text-3xl no-underline flex items-center"
          href="https://www.instagram.com/raebarnesphoto"
          target="_blank"
          rel="noreferrer"
        >
          <span className="w-5 h-5 mx-2 my-2 inline-block">
            <InstagramLogo color="fill-lightPurple" />
          </span>{" "}
          raebarnesphoto
        </a>
      </div>
      <div className="md:w-9/12 flex flex-col md:flex-row">
        {posts && posts.map((post, index) => <InstagramImage {...post} key={`insta-${index}`} />)}
      </div>
    </div>
  );
};
