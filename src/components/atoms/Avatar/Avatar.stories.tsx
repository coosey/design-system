import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: "select", options: ["circle", "square"] },
    status: {
      control: "select",
      options: ["online", "offline", "away", "busy"],
    },
    src: { control: "text" },
    name: { control: "text" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { name: "Jane Doe", size: "md", shape: "circle" },
};

export const WithImage: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar
          key={size}
          size={size}
          src="https://i.pravatar.cc/150?img=47"
          alt="Jane Doe"
        />
      ))}
    </div>
  ),
};

export const WithInitials: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar key={size} size={size} name="Jane Doe" />
      ))}
    </div>
  ),
};

export const WithIconFallback: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar key={size} size={size} />
      ))}
    </div>
  ),
};

export const WithStatus: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="Jane Doe" status="online" />
      <Avatar name="John Doe" status="offline" />
      <Avatar name="Bob Smith" status="away" />
      <Avatar name="Alice Wong" status="busy" />
    </div>
  ),
};

export const Shapes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="Jane Doe" shape="circle" size="lg" />
      <Avatar name="Jane Doe" shape="square" size="lg" />
    </div>
  ),
};

export const BrokenImage: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar src="https://broken-url.xyz/image.jpg" name="Jane Doe" />
      <Avatar src="https://broken-url.xyz/image.jpg" />
    </div>
  ),
};

export const Group: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <AvatarGroup
        size="md"
        avatars={[
          { name: "Jane Doe", src: "https://i.pravatar.cc/150?img=47" },
          { name: "John Smith", src: "https://i.pravatar.cc/150?img=12" },
          { name: "Alice Wong" },
          { name: "Bob Chen" },
          { name: "Carol White" },
          { name: "Dave Brown" },
        ]}
        max={4}
      />
      <AvatarGroup
        size="sm"
        avatars={[
          { name: "Jane Doe" },
          { name: "John Smith" },
          { name: "Alice Wong" },
        ]}
        max={4}
      />
    </div>
  ),
};
