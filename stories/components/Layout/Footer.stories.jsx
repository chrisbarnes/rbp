import { Footer as FooterComponent } from "../../../components/Layout/Footer";

const FooterStory = {
  title: "Components/Layout",
  component: FooterComponent,
};

export default FooterStory;

const Template = (args) => <FooterComponent {...args} />;

export const Footer = Template.bind({});

Footer.args = {
  items: [
    { text: "About", url: "/link1" },
    { text: "Privacy Policy", url: "/link2" },
  ],
};
