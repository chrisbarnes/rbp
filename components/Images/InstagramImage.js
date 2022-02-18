import Image from "next/image";

export const InstagramImage = ({ permalink, media_url }) => {
  return (
    <span className="w-48 h-48 block aspect-square">
      <a
        className="block focus:outline-2 focus:outline-lightPurple"
        href={permalink}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          alt=""
          src={media_url}
          layout="responsive"
          width={196}
          height={196}
          placeholder="empty"
        />
      </a>
    </span>
  );
};
