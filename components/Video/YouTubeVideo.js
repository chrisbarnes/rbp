import YouTube from "react-youtube";

export const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: "542",
    width: "960",
    playerVars: {
      origin: process.env.YT_ORIGIN,
      modestbranding: 1,
    },
  };

  return (
    <YouTube
      id={videoId}
      videoId={videoId}
      opts={opts}
      containerClassName={"mx-auto max-w-4xl"}
    />
  );
};
