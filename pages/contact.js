import { Layout } from "../components/Layout/Layout";
import { TaveForm } from "../components/Forms/TaveForm";
import { getPageNavigation, getPageBySlug } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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
      {page && <h1>{page?.fields?.title}</h1>}
      {page && documentToReactComponents(page?.fields?.mainContent)}
      <TaveForm />
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
