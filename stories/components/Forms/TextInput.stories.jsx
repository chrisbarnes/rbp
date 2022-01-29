import { TextInput as TextInputComponent } from "../../../components/Forms/TextInput";

const TextInputStory = {
  title: "Components/Forms",
  component: TextInputComponent,
};

export default TextInputStory;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TextInputComponent {...args} />;

//👇 Each story then reuses that template
export const TextInput = Template.bind({});
TextInput.args = {
  id: "testInput",
  label: "First Name",
  error: "Please enter your first name",
  isError: false,
  value: "Chris",
};
