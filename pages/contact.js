import Script from "next/script";
import { Layout } from "../components/Layout/Layout";
import { TaveForm } from "../components/Forms/TaveForm";
import { getPageNavigation, getPageBySlug } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SectionIntro } from "../components/Typography/SectionIntro";
import { PullQuote } from "../components/Typography/PullQuote";

export default function ContactPage({ page, navigation, preview }) {
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
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': '${process.env.NEXT_PUBLIC_GADS_ID}/uYWxCJWBqOMDEIfWipsD', 'event_callback': callback }); return false; }
          `,
        }}
      />
      {page && (
        <>
          <SectionIntro heading={page?.fields?.title} headingType="h1">
            {documentToReactComponents(page?.fields?.mainContent)}
          </SectionIntro>
        </>
      )}
      <TaveForm youtubeVideoId={page?.fields?.youtubeVideoId} />
      {page?.fields?.clientQuote?.fields?.quote && (
        <PullQuote
          author={page?.fields?.clientQuote?.fields?.author}
          quote={page?.fields?.clientQuote?.fields?.quote}
        />
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug("contact", preview);
  const navigation = await getPageNavigation();

  return {
    props: {
      preview,
      page: page ? page : null,
      navigation: navigation ? navigation : null,
    },
  };
}
