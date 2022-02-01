import { Layout } from "../components/Layout/Layout";
import { getPages, getPageBySlug, getPageNavigation } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Page({ page, navigation, preview }) {
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
      {page && <h1>{page?.fields?.title}</h1>}
      {page && documentToReactComponents(page?.fields?.mainContent)}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug(params.slug, preview);
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

export async function getStaticPaths({ preview = false }) {
  const allPages = await getPages(preview);

  return {
    paths: allPages?.map(({ slug }) => `/${slug}`) ?? [],
    fallback: true,
  };
}
