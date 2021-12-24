import { Layout } from "../components/Layout/Layout";
import { getPageNavigation } from "../lib/api";

export default function Home({ navigation }) {
  return (
    <Layout {...navigation}>
      <div className="container">
        <p>hello from the homepage</p>
      </div>
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
