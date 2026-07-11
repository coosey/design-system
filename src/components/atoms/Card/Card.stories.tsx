import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: { control: "select", options: ["elevated", "outlined", "filled"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { variant: "elevated", size: "md" },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 400 }}>
      <CardHeader>
        <Text variant="h3">Card Title</Text>
      </CardHeader>
      <CardBody>
        <Text color="muted">
          This is the card body. It can contain any content you need.
        </Text>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="ghost">
          Cancel
        </Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Card variant="elevated" style={{ maxWidth: 400 }}>
      <CardHeader>
        <Text variant="h3">Elevated</Text>
      </CardHeader>
      <CardBody>
        <Text color="muted">Card with drop shadow, no border.</Text>
      </CardBody>
    </Card>
  ),
};

export const Outlined: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Card variant="outlined" style={{ maxWidth: 400 }}>
      <CardHeader>
        <Text variant="h3">Outlined</Text>
      </CardHeader>
      <CardBody>
        <Text color="muted">Card with border, no shadow.</Text>
      </CardBody>
    </Card>
  ),
};

export const Filled: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Card variant="filled" style={{ maxWidth: 400 }}>
      <CardHeader>
        <Text variant="h3">Filled</Text>
      </CardHeader>
      <CardBody>
        <Text color="muted">Card with subtle background fill.</Text>
      </CardBody>
    </Card>
  ),
};

export const BodyOnly: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Card variant="outlined" style={{ maxWidth: 400 }}>
      <CardBody>
        <Text color="muted">
          Card with no header or footer — just body content.
        </Text>
      </CardBody>
    </Card>
  ),
};

export const AllSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Card
          key={size}
          variant="outlined"
          size={size}
          style={{ maxWidth: 400 }}
        >
          <CardHeader>
            <Text variant="h3">Size: {size}</Text>
          </CardHeader>
          <CardBody>
            <Text color="muted">Card body content at {size} size.</Text>
          </CardBody>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};
