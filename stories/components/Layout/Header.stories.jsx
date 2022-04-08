import { Header as HeaderComponent } from "../../../components/Layout/Header";

const HeaderStory = {
  title: "Components/Layout",
  component: HeaderComponent,
};

export default HeaderStory;

const Template = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});

Header.args = {
  isStorybook: true,
  image: {
    url: "images/street-family.jpg",
    title: "Test Image",
  },
  items: [
    { text: "About", url: "/link1" },
    { text: "Portfolio", url: "/link2" },
    { text: "Clients for Life", url: "/link2" },
    { text: "Reviews", url: "/link2" },
    { text: "Blog", url: "/link2" },
    { text: "Contact", url: "/link2" },
  ],
  parameters: {
    nextRouter: {
      path: "/link1",
      asPath: "/link1",
    },
  },
};
