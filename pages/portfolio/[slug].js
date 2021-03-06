import { Layout } from "../../components/Layout/Layout";
import {
  getPortfolioPageBySlug,
  getPortfolioPages,
  getPortfolioNavigation,
  getPageNavigation,
} from "../../lib/api";
import { SectionIntro } from "../../components/Typography/SectionIntro";
import { ContentfulRichText } from "../../components/Typography/ContentfulRichText";
import { PullQuote } from "../../components/Typography/PullQuote";
import { HorizontalNavList } from "../../components/Navigation/HorizontalNavList";
import { getInstagramPosts } from "../../lib/instagram";
import { BasicContentBlock } from "../../components/Typography/BasicContentBlock";
import { Gallery } from "../../components/Images/Gallery";

export default function Page({
  page,
  navigation,
  subNavigation,
  instagramPosts,
  preview,
}) {
  const gridImages = page?.fields?.imageGrid.map((image) => ({
    url: image?.fields?.file?.url,
    width: image?.fields?.file?.details?.image?.width,
    height: image?.fields?.file?.details?.image?.height,
    title: image?.fields?.title,
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
      instagramPosts={instagramPosts}
    >
      {page && (
        <>
          <SectionIntro heading={page?.fields?.title} headingType="h1">
            <ContentfulRichText content={page?.fields?.mainContent} />
          </SectionIntro>
          <HorizontalNavList links={subNavigation} />
          <Gallery images={gridImages} preview={preview} alt />
          <div className="mb-24">
            <BasicContentBlock
              richText={page?.fields?.secondaryContent}
              linkSlug={
                page?.fields?.secondaryContentCallToActionLink?.fields?.slug
              }
              linkText={page?.fields?.secondaryContentCallToActionText}
            />
          </div>
          <PullQuote
            quote={page?.fields?.clientQuote?.fields?.quote}
            author={page?.fields?.clientQuote?.fields?.author}
          />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const pageData = await getPortfolioPageBySlug(params.slug, preview);
  const subNavigation = await getPortfolioNavigation(preview);
  const navigation = await getPageNavigation(preview);
  const instagramPosts = await getInstagramPosts(5);

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      page: pageData.page ? pageData.page : null,
      navigation: navigation ? navigation : null,
      subNavigation,
      instagramPosts: instagramPosts ? instagramPosts : null,
    },
  };
}

export async function getStaticPaths({ preview = false }) {
  const allPages = await getPortfolioPages(preview);
  const subNavigation = allPages?.map(({ fields }) => ({
    text: fields?.navText,
    url: fields?.slug,
  }));
  const paths = allPages?.map(({ fields }) => ({
    params: { slug: fields.slug, subNavigation },
  }));

  return {
    paths: paths ?? [],
    fallback: true,
  };
}
