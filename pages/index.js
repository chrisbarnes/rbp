import { Layout } from "../components/Layout/Layout";
import { getPageNavigation, getHomepage } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Home({ page, navigation, preview }) {
  return (
    <Layout
      {...navigation}
      isPreview={preview}
      seoDescription={page?.fields?.seoDescription}
      seoTitle={page?.fields?.seoTitle}
    >
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
  const page = await getHomepage(preview);
  const navigation = await getPageNavigation();

  return {
    props: {
      preview,
      page: page ? page : null,
      navigation: navigation ? navigation : null,
    },
  };
}
