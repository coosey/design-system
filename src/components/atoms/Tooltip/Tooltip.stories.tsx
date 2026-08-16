import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Tooltip, type TooltipProps } from "./Tooltip";

const meta: Meta<TooltipProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    label: "This is a tooltip",
    children: null,
  },
  argTypes: {
    label: { control: "text" },
    theme: { control: "select", options: ["dark", "light"] },
    placement: {
      control: "select",
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
      ],
    },
    delay: { control: "number" },
    disabled: { control: "boolean" },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { label: "This is a tooltip", placement: "top", theme: "dark" },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        padding: 48,
      }}
    >
      <div />
      <Tooltip label="Top tooltip" placement="top">
        <Button size="sm">Top</Button>
      </Tooltip>
      <div />
      <Tooltip label="Left tooltip" placement="left">
        <Button size="sm">Left</Button>
      </Tooltip>
      <div />
      <Tooltip label="Right tooltip" placement="right">
        <Button size="sm">Right</Button>
      </Tooltip>
      <div />
      <Tooltip label="Bottom tooltip" placement="bottom">
        <Button size="sm">Bottom</Button>
      </Tooltip>
      <div />
    </div>
  ),
};

export const Themes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Tooltip label="Dark tooltip" theme="dark">
        <Button variant="primary">Dark</Button>
      </Tooltip>
      <Tooltip label="Light tooltip" theme="light">
        <Button variant="ghost">Light</Button>
      </Tooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Tooltip label="More information about this field">
        <span style={{ display: "inline-flex", cursor: "help" }}>
          <Icon name="info" size="md" color="muted" />
        </span>
      </Tooltip>
      <Tooltip label="Delete this item" theme="light">
        <span style={{ display: "inline-flex" }}>
          <Icon name="trash" size="md" color="danger" />
        </span>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Tooltip label="This tooltip is disabled" disabled>
      <Button>Hover — no tooltip</Button>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Tooltip label="This is a longer tooltip that wraps across multiple lines to show how the max width constraint works in practice.">
      <Button>Long tooltip</Button>
    </Tooltip>
  ),
};

export const NoDelay: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Tooltip label="Appears instantly" delay={0}>
      <Button>No delay</Button>
    </Tooltip>
  ),
};
