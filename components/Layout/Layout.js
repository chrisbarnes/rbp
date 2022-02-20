import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PreviewBanner } from "../Preview/PreviewBanner";

export const Layout = ({
  children,
  header,
  footer,
  isPreview,
  seoTitle,
  seoDescription,
  headerImage,
  instagramPosts,
}) => {
  return (
    <div>
      <Head>
        <title>
          {seoTitle
            ? seoTitle
            : "Rae Barnes Photography | Philadelphia Family and Newborn Lifestyle Photography"}
        </title>
        {seoDescription && <meta name="description" content={seoDescription} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header items={header} image={headerImage} />
      {isPreview && <PreviewBanner />}
      <div className="max-w-7xl mx-auto">
        <main>{children}</main>
      </div>
      <Footer items={footer} instagramPosts={instagramPosts} />
    </div>
  );
};
