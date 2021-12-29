import { TextInput as TextInputComponent } from "../../../components/Forms/TextInput";

const TextInputStory = {
  title: "Components/Forms",
  component: TextInputComponent,
};

const textInputProps = {
  id: "testInput",
  label: "First Name",
  type: "text",
};

export default TextInputStory;

export const TextInput = () => <TextInputComponent {...textInputProps} />;
