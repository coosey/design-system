import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "white", "muted", "success", "danger"],
    },
    label: { control: "text" },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { size: "md", color: "primary" },
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="muted" />
      <Spinner color="success" />
      <Spinner color="danger" />
      <div style={{ background: "#8B5CF6", padding: 8, borderRadius: 8 }}>
        <Spinner color="white" />
      </div>
    </div>
  ),
};

export const InsideButton: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <button
        disabled
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 16px",
          background: "#8B5CF6",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "not-allowed",
          opacity: 0.8,
        }}
      >
        <Spinner size="sm" color="white" />
        Saving...
      </button>
    </div>
  ),
};
