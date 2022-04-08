import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/Layout/Layout";
import { getPageNavigation, getHomepage } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SectionIntro } from "../components/Typography/SectionIntro";
import { YouTubeVideo } from "../components/Video/YouTubeVideo";
import { ContentfulRichText } from "../components/Typography/ContentfulRichText";
import { SplitSection } from "../components/Typography/SplitSection";
import { LinkedImageGridWithContent } from "../components/Images/LinkedImageGridWithContent";
import { Button } from "../components/Button/Button";
import { PullQuote } from "../components/Typography/PullQuote";
import { getInstagramPosts } from "../lib/instagram";
import { BasicContentBlock } from "../components/Typography/BasicContentBlock";

export default function Home({ page, navigation, instagramPosts, preview }) {
  const linkedImageGridItems = page?.fields?.linkedImageGrid.map((linkedImageGridItem) => {
    if (linkedImageGridItem?.fields?.image) {
      return {
        image: {
          url: linkedImageGridItem?.fields?.image?.fields?.file?.url,
          title: linkedImageGridItem?.fields?.image?.fields?.title,
        },
        link: `/${linkedImageGridItem?.fields?.link?.fields?.slug}`,
      };
    }

    if (!linkedImageGridItem?.fields?.image) {
      return {
        heading: linkedImageGridItem?.fields?.heading,
        description: linkedImageGridItem?.fields?.description,
        link: `/${linkedImageGridItem?.fields?.link?.fields.slug}`,
        linkText: linkedImageGridItem?.fields?.linkText,
      };
    }
  });

  // this is just a test edit

  return (
    <Layout
      {...navigation}
      isPreview={preview}
      seoDescription={page?.fields?.seoDescription}
      seoTitle={page?.fields?.seoTitle}
      headerImage={{
        url: page?.fields?.heroImage?.fields?.file?.url,
        title: page?.fields?.heroImage?.fields?.title,
      }}
      instagramPosts={instagramPosts}
      isHome
    >
      {page && (
        <>
          <SectionIntro heading={page?.fields?.title} headingType="h1">
            {documentToReactComponents(page?.fields?.mainContent)}
          </SectionIntro>
          {page?.fields?.youtubeVideoId && (
            <div className="mb-24">
              <YouTubeVideo videoId={page?.fields?.youtubeVideoId} />
            </div>
          )}
          <SplitSection
            heading={page?.fields?.secondaryContentHeading}
            link={page?.fields?.secondaryContentCallToActionLink?.fields?.slug}
            linkText={page?.fields?.secondaryContentCallToActionText}
          >
            <ContentfulRichText
              content={page?.fields?.secondaryContent}
              altParagraph={(node, children) => <p className="mb-8">{children}</p>}
            />
          </SplitSection>
          <LinkedImageGridWithContent linkedImageGridItems={linkedImageGridItems} />
          <div className="text-center mt-8 mb-28">
            <Link href={`/${page?.fields?.linkedImageGridCallToActionLink?.fields?.slug}`} passHref>
              <Button type="link" size="large">
                {page?.fields?.linkedImageGridCallToActionText}
              </Button>
            </Link>
          </div>
          <section className="max-w-4xl mx-auto mb-28">
            <div className="flex">
              <div className="basis-1/2 text-center px-11">
                <BasicContentBlock
                  richText={page?.fields?.tertiaryContent}
                  linkSlug={page?.fields?.tertiaryContentCallToActionLink?.fields?.slug}
                  linkText={page?.fields?.tertiaryContentCallToActionText}
                />
              </div>
              <div className="basis-1/2">
                <Image
                  alt={page?.fields?.tertiaryContentImage?.fields?.title}
                  src={`https:${page?.fields?.tertiaryContentImage?.fields?.file?.url}`}
                  layout="intrinsic"
                  width={440}
                  height={472}
                  className="home-rae-image"
                />
              </div>
            </div>
          </section>
          {page?.fields?.clientQuote?.fields?.quote && (
            <PullQuote
              author={page?.fields?.clientQuote?.fields?.author}
              quote={page?.fields?.clientQuote?.fields?.quote}
            />
          )}
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getHomepage(preview);
  const navigation = await getPageNavigation();
  const instagramPosts = await getInstagramPosts(5);

  return {
    props: {
      preview,
      page: page ? page : null,
      navigation: navigation ? navigation : null,
      instagramPosts: instagramPosts ? instagramPosts : null,
    },
  };
}
