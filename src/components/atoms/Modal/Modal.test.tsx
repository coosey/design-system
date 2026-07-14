import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../Button/Button";
import { Modal } from "./Modal";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";

function TestModal({
  isOpen = true,
  onClose = vi.fn(),
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEscape={closeOnEscape}
    >
      <ModalHeader>Test Modal</ModalHeader>
      <ModalBody>Modal content</ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}

describe("Modal", () => {
  it("renders when isOpen is true", () => {
    render(<TestModal />);
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(<TestModal isOpen={false} />);
    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const onClose = vi.fn();
    render(<TestModal onClose={onClose} />);
    await userEvent.click(screen.getByRole("button", { name: "Close modal" }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = vi.fn();
    render(<TestModal onClose={onClose} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("does not call onClose on Escape when closeOnEscape is false", async () => {
    const onClose = vi.fn();
    render(<TestModal onClose={onClose} closeOnEscape={false} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).not.toHaveBeenCalled();
  });

  it("has correct aria role", () => {
    render(<TestModal />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("throws when ModalHeader used outside Modal", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<ModalHeader>Title</ModalHeader>)).toThrow();
    spy.mockRestore();
  });
});
