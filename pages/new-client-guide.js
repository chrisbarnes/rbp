import Image from "next/image";
import { Layout } from "../components/Layout/Layout";
import { getPageNavigation, getPageBySlug } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SectionIntro } from "../components/Typography/SectionIntro";
import { PullQuote } from "../components/Typography/PullQuote";
import { SplitSection } from "../components/Typography/SplitSection";
import { ContentfulRichText } from "../components/Typography/ContentfulRichText";
import { Products } from "../components/Products/Products";
import { Process } from "../components/Typography/Process";

export default function NewClientGuidePage({ page, navigation, preview }) {
  const mainContentImages = page?.fields?.mainContentImages.map((image) => ({
    url: image?.fields?.file?.url,
    title: image?.fields?.title,
  }));
  const products = page?.fields?.productHighlights.map((product) => ({
    image: {
      url: product?.fields?.image?.fields?.file?.url,
      title: product?.fields?.image?.fields?.title,
    },
    heading: product?.fields?.heading,
    subHeading: product?.fields?.subHeading,
    content: product?.fields?.content,
  }));
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

          {mainContentImages && mainContentImages.length && (
            <div className="flex mb-24">
              {mainContentImages.map((image, index) => (
                <div className="w-1/2" key={`main-content-image-${index}`}>
                  <Image
                    className=""
                    alt={image.title}
                    src={`https:${image.url}`}
                    layout="responsive"
                    width={640}
                    height={426}
                  />
                </div>
              ))}
            </div>
          )}

          <SectionIntro heading={page?.fields?.processHeading} headingType="h2">
            {documentToReactComponents(page?.fields?.processDescription)}
          </SectionIntro>

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

          <SectionIntro heading={page?.fields?.secondaryContentHeading} headingType="h2">
            {documentToReactComponents(page?.fields?.secondaryContent)}
          </SectionIntro>

          <div className="w-9/12 mx-auto mb-20">
            <Image
              className=""
              alt={page?.fields?.secondaryContentImage?.fields?.title}
              src={`https:${page?.fields?.secondaryContentImage?.fields?.file?.url}`}
              layout="responsive"
              width={958}
              height={638}
            />
          </div>

          <SplitSection
            heading={page?.fields?.tertiaryContentHeading}
            link={page?.fields?.tertiaryContentCallToActionLink?.fields?.slug}
            linkText={page?.fields?.tertiaryContentCallToActionText}
          >
            <ContentfulRichText
              content={page?.fields?.tertiaryContent}
              altParagraph={(node, children) => <p className="mb-8">{children}</p>}
            />
          </SplitSection>

          {products && products.length && <Products products={products} />}
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug("new-client-guide", preview);
  const navigation = await getPageNavigation();

  return {
    props: {
      preview,
      page: page ? page : null,
      navigation: navigation ? navigation : null,
    },
  };
}
