import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: { control: "select", options: ["solid", "subtle", "outline"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning", "gray"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    count: { control: "boolean" },
    dot: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { children: "Badge", variant: "subtle", color: "primary", size: "md" },
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge variant="solid" color="primary">
        Solid
      </Badge>
      <Badge variant="subtle" color="primary">
        Subtle
      </Badge>
      <Badge variant="outline" color="primary">
        Outline
      </Badge>
    </div>
  ),
};

export const Colors: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {(["solid", "subtle", "outline"] as const).map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
          {(
            [
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
              "gray",
            ] as const
          ).map((color) => (
            <Badge key={color} variant={variant} color={color}>
              {color}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge color="success" icon="check">
        Verified
      </Badge>
      <Badge color="danger" icon="close">
        Rejected
      </Badge>
      <Badge color="warning" icon="warning">
        Pending
      </Badge>
      <Badge color="primary" icon="info">
        Info
      </Badge>
    </div>
  ),
};

export const WithDot: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge color="success" dot>
        Active
      </Badge>
      <Badge color="danger" dot>
        Offline
      </Badge>
      <Badge color="warning" dot>
        Away
      </Badge>
      <Badge color="gray" dot>
        Inactive
      </Badge>
    </div>
  ),
};

export const CountBadge: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge count color="primary">
        3
      </Badge>
      <Badge count color="danger">
        12
      </Badge>
      <Badge count color="success">
        99+
      </Badge>
      <Badge count color="gray">
        0
      </Badge>
    </div>
  ),
};

export const InContext: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* badge on a button */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}>
          Notifications
        </span>
        <Badge count color="danger">
          4
        </Badge>
      </div>
      {/* status badge in a list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { label: "Payment processed", status: "success" as const },
          { label: "Awaiting review", status: "warning" as const },
          { label: "Request failed", status: "danger" as const },
        ].map(({ label, status }) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}>
              {label}
            </span>
            <Badge color={status} dot variant="subtle">
              {status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  ),
};
