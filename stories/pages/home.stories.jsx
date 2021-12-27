import Home from "../../pages/index";
import { navigation } from "../mocks/navigation";

const HomeStory = {
  title: "Pages/Home",
  component: Home,
};

const homeProps = {
  fields: {
    title: "Regular Page",
  },
};

export default HomeStory;

export const HomePage = () => <Home navigation={navigation} page={homeProps} />;
