import "../styles/globals.css";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

// Set the unoptimized prop on next image components so they work in SB
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized src={props.src} />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
