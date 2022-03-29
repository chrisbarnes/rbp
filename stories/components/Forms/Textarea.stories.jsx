import { Textarea as TextareaComponent } from "../../../components/Forms/Textarea";

const TextareaStory = {
  title: "Components/Forms",
  component: TextareaComponent,
};

export default TextareaStory;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TextareaComponent {...args} />;

//👇 Each story then reuses that template
export const Textarea = Template.bind({});
Textarea.args = {
  id: "testTextarea",
  label: "Message",
  isError: false,
  defaultValue: "A message",
  modifier: 1,
  type: "Textarea",
  isRequired: false,
};
