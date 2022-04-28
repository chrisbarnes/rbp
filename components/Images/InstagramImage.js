import Image from "next/image";

export const InstagramImage = ({ permalink, media_url }) => {
  return (
    <span className="md:w-48 md:h-48 block aspect-square">
      <a className="block focus:outline-2 focus:outline-lightPurple" href={permalink} rel="noreferrer" target="_blank">
        <Image alt="" src={media_url} layout="responsive" width={196} height={196} placeholder="empty" />
      </a>
    </span>
  );
};
