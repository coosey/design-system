import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, type CheckboxProps } from "./Checkbox";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { label: "Accept terms and conditions", size: "md" },
};

export const Checked: Story = {
  args: { label: "Checked", defaultChecked: true },
  parameters: { controls: { disable: true } },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
  parameters: { controls: { disable: true } },
};

export const DisabledChecked: Story = {
  args: { label: "Disabled checked", disabled: true, defaultChecked: true },
  parameters: { controls: { disable: true } },
};
