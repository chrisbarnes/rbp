import { HeaderLinks as HeaderLinksComponent } from "../../../components/Navigation/HeaderLinks";
import { FooterLinks as FooterLinksComponent } from "../../../components/Navigation/FooterLinks";

const HeaderLinksStory = {
  title: "Components",
  component: HeaderLinksComponent,
};

const FooterLinksStory = {
  title: "Components",
  component: FooterLinksComponent,
};

const headerLinksProps = {
  links: [
    { text: "About", url: "/link1" },
    { text: "Portfolio", url: "/link2" },
    { text: "Clients for Life", url: "/link2" },
    { text: "Reviews", url: "/link2" },
    { text: "Blog", url: "/link2" },
    { text: "Contact", url: "/link2" },
  ],
};

const footerLinksProps = {
  links: [
    { text: "Link 1", url: "/link1" },
    { text: "Link 2", url: "/link2" },
    { text: "Link 3", url: "/link3" },
  ],
};

const stories = {
  HeaderLinksStory,
  FooterLinksStory,
};

export default stories;

export const HeaderLinks = () => <HeaderLinksComponent {...headerLinksProps} />;
export const FooterLinks = () => <FooterLinksComponent {...footerLinksProps} />;
