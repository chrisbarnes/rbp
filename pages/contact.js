import { Layout } from "../components/Layout/Layout";
import { TaveForm } from "../components/Forms/TaveForm";
import { getPageNavigation } from "../lib/api";

export default function ContactPage({ page, navigation }) {
  return (
    <Layout {...navigation}>
      {page && <h1>Contact</h1>}
      <TaveForm />
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const navigation = await getPageNavigation();

  return {
    props: {
      preview,
      navigation: navigation ? navigation : null,
    },
  };
}
