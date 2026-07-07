import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "number"],
    },
    errorMessage: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    size: "md",
    type: "text",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    errorMessage: "Enter a valid email address.",
  },
  parameters: { controls: { disable: true } },
};

export const Disabled: Story = {
  args: { label: "Email", placeholder: "you@example.com", disabled: true },
  parameters: { controls: { disable: true } },
};
