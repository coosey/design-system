import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { icons, type IconName } from "./Icons";

const iconNames = Object.keys(icons) as IconName[];

const meta = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: { control: "select", options: iconNames },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: {
      control: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "muted",
        "subtle",
        "success",
        "danger",
        "warning",
        "white",
      ],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { name: "check", size: "md", color: "primary" },
};

export const AllIcons = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      {iconNames.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            width: 72,
          }}
        >
          <Icon name={name} size="md" color="primary" />
          <span style={{ fontSize: 11, color: "#78716C", textAlign: "center" }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Icon name="bell" size="xs" color="primary" />
      <Icon name="bell" size="sm" color="primary" />
      <Icon name="bell" size="md" color="primary" />
      <Icon name="bell" size="lg" color="primary" />
      <Icon name="bell" size="xl" color="primary" />
    </div>
  ),
};

export const Colors = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Icon name="check" size="lg" color="primary" />
      <Icon name="check" size="lg" color="secondary" />
      <Icon name="check" size="lg" color="success" />
      <Icon name="check" size="lg" color="danger" />
      <Icon name="check" size="lg" color="warning" />
      <Icon name="check" size="lg" color="muted" />
      <div style={{ background: "#8B5CF6", padding: 8, borderRadius: 8 }}>
        <Icon name="check" size="lg" color="white" />
      </div>
    </div>
  ),
};

export const Accessible = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {/* decorative — hidden from screen readers */}
      <Icon name="check" size="md" color="success" />
      {/* meaningful — announced to screen readers */}
      <Icon
        name="warning"
        size="md"
        color="warning"
        label="Warning: action required"
      />
    </div>
  ),
};
