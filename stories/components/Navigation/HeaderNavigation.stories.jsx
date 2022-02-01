import { HeaderLinks as HeaderLinksComponent } from "../../../components/Navigation/HeaderLinks";

const HeaderLinksStory = {
  title: "Components/Navigation",
  component: HeaderLinksComponent,
};

export default HeaderLinksStory;

const Template = (args) => <HeaderLinksComponent {...args} />;

export const HeaderLinks = Template.bind({});

HeaderLinks.args = {
  links: [
    { text: "About", url: "/link1" },
    { text: "Portfolio", url: "/link2" },
    { text: "Clients for Life", url: "/link2" },
    { text: "Reviews", url: "/link2" },
    { text: "Blog", url: "/link2" },
    { text: "Contact", url: "/link2" },
  ],
};
