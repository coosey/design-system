import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../Text/Text";
import type { DividerProps } from "./Divider";
import { Divider } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    variant: { control: "select", options: ["solid", "dashed"] },
    spacing: { control: "select", options: ["none", "sm", "md", "lg"] },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Example: Story = {
  args: { orientation: "horizontal", variant: "solid", spacing: "md" },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Text>Content above</Text>
      <Divider {...args} />
      <Text>Content below</Text>
    </div>
  ),
};

export const WithLabel: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 320 }}>
      <Text>Sign in with email</Text>
      <Divider label="OR" />
      <Text>Continue with Google</Text>
    </div>
  ),
};

export const Dashed: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 320 }}>
      <Text>Section one</Text>
      <Divider variant="dashed" />
      <Text>Section two</Text>
    </div>
  ),
};

export const Vertical: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", height: 48 }}>
      <Text>Left</Text>
      <Divider orientation="vertical" />
      <Text>Middle</Text>
      <Divider orientation="vertical" variant="dashed" />
      <Text>Right</Text>
    </div>
  ),
};

export const Spacing: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 320 }}>
      <Text variant="caption" color="muted">
        spacing: none
      </Text>
      <Divider spacing="none" />
      <Text variant="caption" color="muted">
        spacing: sm
      </Text>
      <Divider spacing="sm" />
      <Text variant="caption" color="muted">
        spacing: md
      </Text>
      <Divider spacing="md" />
      <Text variant="caption" color="muted">
        spacing: lg
      </Text>
      <Divider spacing="lg" />
    </div>
  ),
};
