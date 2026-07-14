import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import type { ToastItem } from "./ToastContext";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "./useToast";

const meta: Meta<ToastItem> = {
  title: "Components/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  render: () => {
    const toast = useToast();
    return (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Button
          variant="primary"
          onClick={() => toast.success("Profile saved!")}
        >
          Success
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast.error("Something went wrong", {
              description: "Please try again later.",
            })
          }
        >
          Error
        </Button>
        <Button
          variant="ghost"
          onClick={() =>
            toast.warning("Session expiring", {
              description: "You will be logged out in 5 minutes.",
            })
          }
        >
          Warning
        </Button>
        <Button onClick={() => toast.info("Update available")}>Info</Button>
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const toast = useToast();
    return (
      <Button
        onClick={() =>
          toast.success("Changes saved", {
            description: "Your profile has been updated successfully.",
          })
        }
      >
        Show with description
      </Button>
    );
  },
};

export const Persistent: Story = {
  render: () => {
    const toast = useToast();
    return (
      <Button
        onClick={() =>
          toast.persistent("warning", "Action required", {
            description: "Please verify your email to continue.",
          })
        }
      >
        Show persistent toast
      </Button>
    );
  },
};

export const MultipleToasts: Story = {
  render: () => {
    const toast = useToast();
    return (
      <Button
        onClick={() => {
          toast.success("First toast");
          setTimeout(() => toast.error("Second toast"), 300);
          setTimeout(() => toast.warning("Third toast"), 600);
        }}
      >
        Stack multiple toasts
      </Button>
    );
  },
};
