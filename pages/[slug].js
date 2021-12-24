import { Layout } from "../components/Layout/Layout";
import { getPages, getPageBySlug, getPageNavigation } from "../lib/api";

export default function Page({ page, navigation }) {
  return (
    <Layout {...navigation}>
      <h1>{page?.fields?.title}</h1>
      <p>hello from a page</p>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug(params.slug);
  const navigation = await getPageNavigation();

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
