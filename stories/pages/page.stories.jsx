import Page from "../../pages/[slug]";
import { navigation } from "../mocks/navigation";

const PageStory = {
  title: "Pages/Page",
  component: Page,
};

const pageProps = {
  fields: {
    title: "Regular Page",
  },
};

export default PageStory;

export const RegularPage = () => (
  <Page navigation={navigation} page={pageProps} />
);
