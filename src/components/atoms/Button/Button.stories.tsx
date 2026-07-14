import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, type ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    borderRadius: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    borderRadius: "md",
    onClick: () => alert("Clicked!"),
  },
};

export const Loading = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button style={{ gap: 8 }} variant="primary" loading>
        Saving
      </Button>
      <Button style={{ gap: 8 }} variant="secondary" loading>
        Loading
      </Button>
      <Button style={{ gap: 8 }} variant="ghost" loading>
        Processing
      </Button>
    </div>
  ),
};

export const AllVariants = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button
        variant="primary"
        borderRadius="md"
        onClick={() => alert("Primary Button clicked!")}
      >
        Primary
      </Button>
      <Button
        variant="secondary"
        borderRadius="md"
        onClick={() => alert("Secondary Button clicked!")}
      >
        Secondary
      </Button>
      <Button
        variant="ghost"
        borderRadius="md"
        onClick={() => alert("Ghost Button clicked!")}
      >
        Ghost
      </Button>
      <Button
        variant="danger"
        borderRadius="md"
        onClick={() => alert("Danger Button clicked!")}
      >
        Danger
      </Button>
      <Button borderRadius="md" disabled>
        Disabled
      </Button>
    </div>
  ),
};

export const Sizes = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button
        size="sm"
        borderRadius="md"
        onClick={() => alert("Small Button clicked!")}
      >
        Small
      </Button>
      <Button
        size="md"
        borderRadius="md"
        onClick={() => alert("Medium Button clicked!")}
      >
        Medium
      </Button>
      <Button
        size="lg"
        borderRadius="md"
        onClick={() => alert("Large Button clicked!")}
      >
        Large
      </Button>
    </div>
  ),
};
