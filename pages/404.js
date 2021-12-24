import { Layout } from "../components/Layout/Layout";
import { getPageNavigation } from "../lib/api";

export default function NotFound({ navigation }) {
  return (
    <Layout {...navigation}>
      <div className="container">
        <p>Sorry. We could not find that page. :-/</p>
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
