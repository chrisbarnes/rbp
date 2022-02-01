import { FooterLinks as FooterLinksComponent } from "../../../components/Navigation/FooterLinks";

const FooterLinksStory = {
  title: "Components/Navigation",
  component: FooterLinksComponent,
};

export default FooterLinksStory;

const Template = (args) => <FooterLinksComponent {...args} />;

export const FooterLinks = Template.bind({});

FooterLinks.args = {
  links: [
    { text: "About", url: "/link1" },
    { text: "Portfolio", url: "/link2" },
    { text: "Clients for Life", url: "/link3" },
  ],
};
