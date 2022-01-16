// Button.stories.js|jsx

import React from "react";

import { Button } from "../../../components/Button/Button";

const ButtonStory = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: Button,
};

export default ButtonStory;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args}>Button</Button>;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  type: "button",
  label: "Button",
};
