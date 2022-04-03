import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/Layout/Layout";
import { getPageBySlug, getPageNavigation } from "../lib/api";
import { SectionIntro } from "../components/Typography/SectionIntro";
import { JumpLinks } from "../components/Navigation/JumpLinks";
import { ImageCallout } from "../components/Typography/ImageCallout";
import { ContentfulRichText } from "../components/Typography/ContentfulRichText";
import { Button } from "../components/Button/Button";
import { CalloutBoxes } from "../components/Typography/CalloutBoxes";
import { YouTubeVideo } from "../components/Video/YouTubeVideo";
import { Process } from "../components/Typography/Process";
import { PullQuote } from "../components/Typography/PullQuote";
import { ImageGrid } from "../components/Images/ImageGrid";
import { getContentfulImageDataFromArray } from "../lib/utils";
import { getInstagramPosts } from "../lib/instagram";

export default function Page({ page, navigation, instagramPosts, preview }) {
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

  const values = [
    {
      heading: "Quality matters to me",
      description:
        "I've worked hard to hone my skills so that my work isn't just pretty on social media; it will look great in print.",
    },
    {
      heading: "Craftsmanship matters to me",
      description:
        "We work with specialists so that each piece you order from me will be handmade by the best craftsmen in the country.",
    },
    {
      heading: "Your family matters to me",
      description:
        "My calendar is limited so that I can best serve each and every family that commissions me to photograph them.",
    },
  ];

  const steps = page?.fields?.process.map((step, index) => ({
    heading: step?.fields?.heading,
    description: step?.fields?.description,
    image: {
      title: step?.fields?.image?.fields?.title,
      url: `https:${step?.fields?.image?.fields?.file?.url}`,
      width: index === 3 ? "718px" : "380px",
      height: index === 3 ? "478px" : "570px",
    },
  }));

  console.log(page);

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
    >
      {page && (
        <>
          <SectionIntro heading={page?.fields?.title} headingType="h1">
            <ContentfulRichText content={page?.fields?.mainContent} />
          </SectionIntro>
          <JumpLinks links={jumpLinks} />
          <ImageCallout
            content={page?.fields?.imageCalloutContent}
            image={{
              url: page?.fields?.imageCalloutImage?.fields?.file?.url,
              title: page?.fields?.imageCalloutImage?.fields?.title,
            }}
          />
          <section id="about-rae" className="max-w-4xl mx-auto py-32 px-5">
            <ContentfulRichText
              content={page?.fields?.secondaryContent}
              altParagraph={(node, children) => <p className="text-xl mb-8">{children}</p>}
              altImage={(node, children) => {
                // Force webp as the default image format here
                let imageSrc = `https:${node?.data?.target?.fields?.file?.url}?fm=webp`;

                // Use a super low quality jpg as the blur data url
                let blurSrc = `https:${node?.data?.target?.fields?.file?.url}?fm=jpg&q=1`;

                return (
                  <span className="max-w-sm float-right pl-7 pb-7">
                    <Image
                      alt={node?.data?.target?.fields?.title}
                      src={imageSrc}
                      layout="intrinsic"
                      width={378}
                      height={406}
                      placeholder="blur"
                      blurDataURL={blurSrc}
                    />
                  </span>
                );
              }}
            />
            <div className="text-center mt-16">
              <Link href={`/${page?.fields?.secondaryContentCallToActionLink?.fields?.slug}`} passHref>
                <Button type="link" size="large">
                  {page?.fields?.secondaryContentCallToActionText}
                </Button>
              </Link>
            </div>
          </section>
          <CalloutBoxes items={values} />
          <section id="about-experience" className="mb-20">
            <SectionIntro id="about-experience" heading={page?.fields?.tertiaryContentHeading} headingType="h2">
              <ContentfulRichText content={page?.fields?.tertiaryContent} />
            </SectionIntro>
          </section>
          {page?.fields?.youtubeVideoId && (
            <div className="mb-24">
              <YouTubeVideo videoId={page?.fields?.youtubeVideoId} />
            </div>
          )}

          <Process
            steps={steps}
            footerDescription={page?.fields?.processFooterMessage}
            isFooterCtaCalendarLink={page?.fields?.isProcessFooterCtaLinkToCalendar}
            footerCtaText={page?.fields?.processFooterCallToActionText}
            footerCtaLink={`/${page?.fields?.processFooterCallToActionLink?.fields?.slug}`}
          />

          {page?.fields?.clientQuote?.fields?.quote && (
            <PullQuote
              author={page?.fields?.clientQuote?.fields?.author}
              quote={page?.fields?.clientQuote?.fields?.quote}
            />
          )}
          <section id="about-artwork" className="mb-20">
            <SectionIntro id="about-artwork" heading={page?.fields?.quaternaryContentHeading} headingType="h2">
              <ContentfulRichText content={page?.fields?.quaternaryContent} />
            </SectionIntro>
          </section>
          <ImageGrid images={getContentfulImageDataFromArray(page?.fields?.imageGrid)} />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug("about", preview);
  const navigation = await getPageNavigation(preview);
  const instagramPosts = await getInstagramPosts(5);

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
      instagramPosts: instagramPosts ? instagramPosts : null,
    },
  };
}
