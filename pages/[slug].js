import { getPages, getPageBySlug } from "../lib/api";

export default function Page({ page }) {
  console.log("page", page);

  return (
    <>
      <h1>{page?.fields?.title}</h1>
      <p>hello from a page</p>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug(params.slug);

  return {
    props: {
      preview,
      page: page ? page : null,
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
