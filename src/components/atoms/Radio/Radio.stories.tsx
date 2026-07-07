import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

const meta = {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { label: "Option one", size: "md" },
};

export const Checked: Story = {
  args: { label: "Selected option", defaultChecked: true },
  parameters: { controls: { disable: true } },
};

export const Disabled: Story = {
  args: { label: "Disabled option", disabled: true },
  parameters: { controls: { disable: true } },
};

export const Group: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [value, setValue] = useState("option-1");
    return (
      <RadioGroup
        name="demo"
        value={value}
        onChange={setValue}
        label="Pick an option"
      >
        <Radio value="option-1" label="Option one" size="md" />
        <Radio value="option-2" label="Option two" size="md" />
        <Radio value="option-3" label="Option three" size="md" />
      </RadioGroup>
    );
  },
};

export const GroupDisabled: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <RadioGroup
      name="demo-disabled"
      value="option-1"
      label="Disabled group"
      disabled
    >
      <Radio value="option-1" label="Option one" size="md" />
      <Radio value="option-2" label="Option two" size="md" />
    </RadioGroup>
  ),
};
