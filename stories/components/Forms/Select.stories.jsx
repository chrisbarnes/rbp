import { Select as SelectComponent } from "../../../components/Forms/Select";

const SelectStory = {
  title: "Components/Forms",
  component: SelectComponent,
};

export default SelectStory;

const Template = (args) => <SelectComponent {...args} />;

export const Select = Template.bind({});

Select.args = {
  id: "testSelect",
  label: "Session Type",
  options: [
    {
      name: "Newborn Portraits",
      value: "Newborn",
    },
    {
      name: "Maternity Portraits",
      value: "Maternity",
    },
    {
      name: "Family Portraits",
      value: "Family",
    },
  ],
  isError: false,
  error: "Please select a session type",
};
