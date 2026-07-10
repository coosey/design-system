import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "bodyLg",
        "body",
        "bodySm",
        "caption",
      ],
    },
    color: {
      control: "select",
      options: [
        "default",
        "muted",
        "subtle",
        "primary",
        "secondary",
        "danger",
        "success",
        "warning",
        "inverse",
      ],
    },
    align: { control: "select", options: ["left", "center", "right"] },
    truncate: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    variant: "body",
  },
};

export const TypeScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Text variant="display">Display — Nunito 40px / 800</Text>
      <Text variant="h1">Heading 1 — Nunito 32px / 800</Text>
      <Text variant="h2">Heading 2 — Nunito 24px / 700</Text>
      <Text variant="h3">Heading 3 — Nunito 20px / 700</Text>
      <Text variant="bodyLg">Body Large — Inter 18px / 400</Text>
      <Text variant="body">Body — Inter 16px / 400</Text>
      <Text variant="bodySm">Body Small — Inter 14px / 400</Text>
      <Text variant="caption">Caption — Inter 12px / 500</Text>
    </div>
  ),
};

export const Colors: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Text color="default">Default — gray.900</Text>
      <Text color="muted">Muted — gray.500</Text>
      <Text color="subtle">Subtle — gray.400</Text>
      <Text color="primary">Primary — purple.500</Text>
      <Text color="secondary">Secondary — pink.400</Text>
      <Text color="danger">Danger — red</Text>
      <Text color="success">Success — green</Text>
      <Text color="warning">Warning — amber</Text>
      <div style={{ background: "#1C1917", padding: 8, borderRadius: 6 }}>
        <Text color="inverse">Inverse — white</Text>
      </div>
    </div>
  ),
};

export const PolymorphicAs: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Text as="h1" variant="h3">
        h1 in DOM, h3 visually - inspect element to confirm
      </Text>
      <Text as="span" variant="body">
        span in DOM, body visually
      </Text>
      <Text as="label" variant="caption">
        label in DOM, caption visually
      </Text>
    </div>
  ),
};

export const Truncate: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Text truncate>
        This is a very long line of text that should be truncated with an
        ellipsis when it overflows its container
      </Text>
    </div>
  ),
};
