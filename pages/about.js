import { Layout } from "../components/Layout/Layout";
import { getPageBySlug, getPageNavigation } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SectionIntro } from "../components/Typography/SectionIntro";
import { JumpLinks } from "../components/Navigation/JumpLinks";
import { ImageCallout } from "../components/Typography/ImageCallout";

export default function Page({ page, navigation, preview }) {
  const jumpLinks = [
    {
      text: "About Rae",
      section: "about-rae",
    },
    {
      text: "About the Experience",
      section: "about-experience",
    },
    {
      text: "About Heirloom Artwork",
      section: "about-artwork",
    },
  ];

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
          <JumpLinks links={jumpLinks} />
          <ImageCallout
            content={page?.fields?.imageCalloutContent}
            image={{
              url: page?.fields?.imageCalloutImage?.fields?.file?.url,
              title: page?.fields?.imageCalloutImage?.fields?.title,
            }}
          />
          <section id="about-rae">
            <p>complex content section</p>
          </section>
          <p>values section</p>
          <section id="about-experience">
            <SectionIntro
              id="about-experience"
              heading="About the Experience"
              headingType="h2"
            >
              <p>about the experience text goes here</p>
            </SectionIntro>
          </section>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug("about", preview);
  const navigation = await getPageNavigation(preview);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      page: page ? page : null,
      navigation: navigation ? navigation : null,
    },
  };
}
