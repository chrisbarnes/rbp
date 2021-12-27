import { Layout } from "../components/Layout/Layout";
import { getPages, getPageBySlug, getPageNavigation } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Page({ page, navigation }) {
  return (
    <Layout {...navigation}>
      {page && <h1>{page?.fields?.title}</h1>}
      {page && documentToReactComponents(page?.fields?.mainContent)}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug(params.slug);
  const navigation = await getPageNavigation();

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

export async function getStaticPaths() {
  const allPages = await getPages();

  return {
    paths: allPages?.map(({ slug }) => `/${slug}`) ?? [],
    fallback: true,
  };
}
