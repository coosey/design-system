import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders with default accessible label", () => {
    render(<Spinner />);
    expect(screen.getByRole("status", { name: "Loading" })).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<Spinner label="Saving profile" />);
    expect(
      screen.getByRole("status", { name: "Saving profile" }),
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(<Spinner className="custom-class" />);
    expect(screen.getByRole("status")).toHaveClass("custom-class");
  });
});
