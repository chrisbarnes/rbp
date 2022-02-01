import { SocialLinks as SocialLinksComponent } from "../../../components/Social/SocialLinks";

const SocialLinksStory = {
  title: "Components/Social",
  component: SocialLinksComponent,
};

export default SocialLinksStory;

const Template = (args) => <SocialLinksComponent {...args} />;

export const SocialLinks = Template.bind({});
