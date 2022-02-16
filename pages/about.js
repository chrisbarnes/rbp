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

  const processSteps = [
    {
      heading: "The Planning",
      description:
        "Once you have booked, we will set up a time 4-6 weeks before your session to plan.  This can be done in your home or over Zoom. During this time, we chat about what to wear, what you might want to order, and what we can expect from each other during the session.",
      image: {
        title: "test image",
        url: "/images/street-family.jpg",
        width: "380px",
        height: "570px",
      },
    },
    {
      heading: "The Session",
      description:
        "On the day of the session, you just have to show up dressed and fed (no hangry toddlers please), and we'll take it from there. Don't worry if everything isn't perfect, that's real life. We will do everything we can to keep everyone relaxed and having fun.",
      image: {
        title: "test image",
        url: "/images/street-family.jpg",
        width: "380px",
        height: "570px",
      },
    },
    {
      heading: "The Ordering",
      description:
        "Within a week of your session, we will have your ordering appointment. This is when you'll be able to see the proofs and purchase what you love most. Since we do not offer online ordering upfront, all decision makers should be present.",
      image: {
        title: "test image",
        url: "/images/street-family.jpg",
        width: "380px",
        height: "570px",
      },
    },
    {
      heading: "The Delivery",
      description:
        "Your order is custom and handmade. It may take 6-10 weeks to complete, but we promise it is worth the wait. All wall galleries and large wall art includes complimentary and professional installation for you.",
      image: {
        title: "test image",
        url: "/images/street-family.jpg",
        width: "718px",
        height: "478px",
      },
    },
  ];
  const quote =
    "Rae Barnes has taken our family photo for the past five years.  We have four young, high energy children and a handful of pets, so this is no small task. Somehow, without fail, every single time Rae catches insightful moments of each of us, and all of us together, that bring my husband and I to tears. She is delightful to work with and incredibly professional in her work and time frame. We could not recommend Rae enough for capturing these moments that are so short, and too sweet to forget.";

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
              altParagraph={(node, children) => (
                <p className="text-xl mb-8">{children}</p>
              )}
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
              <Link
                href={`/${page?.fields?.secondaryContentCallToActionLink?.fields?.slug}`}
                passHref
              >
                <Button type="link" size="large">
                  {page?.fields?.secondaryContentCallToActionText}
                </Button>
              </Link>
            </div>
          </section>
          <CalloutBoxes items={values} />
          <section id="about-experience" className="mb-20">
            <SectionIntro
              id="about-experience"
              heading="About the Experience"
              headingType="h2"
            >
              <ContentfulRichText content={page?.fields?.tertiaryContent} />
            </SectionIntro>
          </section>
          <div className="mb-24">
            <YouTubeVideo videoId="Pq8GXD-G8VA" />
          </div>
          <Process steps={processSteps} />
          <PullQuote author="Julia P." quote={quote} />
          <section id="about-artwork" className="mb-20">
            <SectionIntro
              id="about-artwork"
              heading="Heirloom Artwork"
              headingType="h2"
            >
              <ContentfulRichText content={page?.fields?.quaternaryContent} />
            </SectionIntro>
          </section>
          <ImageGrid
            images={getContentfulImageDataFromArray(page?.fields?.imageGrid)}
          />
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
