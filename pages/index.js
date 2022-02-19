import Link from "next/link";
import { Layout } from "../components/Layout/Layout";
import { getPageNavigation, getHomepage } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SectionIntro } from "../components/Typography/SectionIntro";
import { YouTubeVideo } from "../components/Video/YouTubeVideo";
import { ContentfulRichText } from "../components/Typography/ContentfulRichText";
import { Button } from "../components/Button/Button";
import { SplitSection } from "../components/Typography/SplitSection";

export default function Home({ page, navigation, preview }) {
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
              altParagraph={(node, children) => (
                <p className="mb-8">{children}</p>
              )}
            />
          </SplitSection>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getHomepage(preview);
  const navigation = await getPageNavigation();

  return {
    props: {
      preview,
      page: page ? page : null,
      navigation: navigation ? navigation : null,
    },
  };
}
