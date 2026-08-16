import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders as separator with horizontal orientation by default", () => {
    render(<Divider />);
    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("renders vertical orientation", () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });

  it("renders label when provided", () => {
    render(<Divider label="OR" />);
    expect(screen.getByText("OR")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(<Divider className="custom" />);
    expect(screen.getByRole("separator")).toHaveClass("custom");
  });
});
