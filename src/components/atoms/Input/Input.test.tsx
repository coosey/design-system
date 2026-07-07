import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("associates label with input via htmlFor/id", () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("shows error message and marks field as invalid", () => {
    render(<Input label="Email" errorMessage="Required" />);
    expect(screen.getByText("Required")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("accepts typed input", async () => {
    render(<Input label="Email" />);
    const field = screen.getByLabelText("Email");
    await userEvent.type(field, "hi@example.com");
    expect(field).toHaveValue("hi@example.com");
  });

  it("shows invalid styling automatically when errorMessage is passed without explicit invalid prop", () => {
    render(<Input label="Email" errorMessage="Required" />);
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});
