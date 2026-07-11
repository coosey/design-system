import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";

const meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "full"] },
    closeOnOverlayClick: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
  },
  parameters: { layout: "centered" },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <Text color="muted">
              This is the modal body. It can contain any content you need,
              including forms, media, or other components.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [size, setSize] = useState<"sm" | "md" | "lg" | "full" | null>(null);
    return (
      <>
        <div style={{ display: "flex", gap: 8 }}>
          {(["sm", "md", "lg", "full"] as const).map((s) => (
            <Button key={s} variant="secondary" onClick={() => setSize(s)}>
              {s}
            </Button>
          ))}
        </div>
        <Modal
          isOpen={!!size}
          onClose={() => setSize(null)}
          size={size ?? "md"}
        >
          <ModalHeader>Size: {size}</ModalHeader>
          <ModalBody>
            <Text color="muted">Modal at {size} size.</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setSize(null)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader showCloseButton={false}>No Close Button</ModalHeader>
          <ModalBody>
            <Text color="muted">
              This modal has no close button in the header.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Dismiss</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader>Long Content</ModalHeader>
          <ModalBody>
            {Array.from({ length: 20 }).map((_, i) => (
              <Text key={i} color="muted" style={{ marginBottom: 12 }}>
                Paragraph {i + 1} — the modal body scrolls independently while
                the header and footer stay fixed.
              </Text>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
