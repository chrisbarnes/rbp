import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, header, footer }) => {
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
      </Head>
      <Header items={header} />
      <main>{children}</main>
      <Footer items={footer} />
    </>
  );
};
