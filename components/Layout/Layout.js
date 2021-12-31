import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PreviewBanner } from "../Preview/PreviewBanner";

export const Layout = ({ children, header, footer, isPreview }) => {
  return (
    <>
      <Head>
        <title>
          Rae Barnes | Philadelphia Family and Newborn Lifestyle Photography
        </title>
        <meta
          name="description"
          content="Custom photography for discerning parents that want to remember the beauty of their growing family. Serving the Greater Philadelphia region"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header items={header} />
      {isPreview && <PreviewBanner />}
      <main>{children}</main>
      <Footer items={footer} />
    </>
  );
};
