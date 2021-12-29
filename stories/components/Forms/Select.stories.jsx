import { Select as SelectComponent } from "../../../components/Forms/Select";

const SelectStory = {
  title: "Components/Forms",
  component: SelectComponent,
};

const selectProps = {
  id: "testSelect",
  label: "State",
  options: [
    {
      name: "PA",
      value: "PA",
    },
    {
      name: "CA",
      value: "CA",
    },
  ],
};

export default SelectStory;

export const Select = () => <SelectComponent {...selectProps} />;
