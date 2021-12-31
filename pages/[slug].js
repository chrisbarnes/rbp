import { Layout } from "../components/Layout/Layout";
import { getPages, getPageBySlug, getPageNavigation } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Page({ page, navigation, preview }) {
  return (
    <Layout {...navigation} isPreview={preview}>
      {page && page?.fields?.heroImage && (
        <Image
          alt={page?.fields?.heroImage?.fields?.title}
          src={`https:${page?.fields?.heroImage?.fields?.file?.url}?fm=webp`} // Force webp as the default image format here
          layout="responsive"
          width={700}
          height={475}
          placeholder="blur"
          blurDataURL={`https:${page?.fields?.heroImage?.fields?.file?.url}?fm=jpg&q=1`} // Use a super low quality jpg as the blur data url
          priority
        />
      )}
      {page && <h1>{page?.fields?.title}</h1>}
      {page && documentToReactComponents(page?.fields?.mainContent)}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const page = await getPageBySlug(params.slug, preview);
  const navigation = await getPageNavigation(preview);

  console.log("page", page);

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
