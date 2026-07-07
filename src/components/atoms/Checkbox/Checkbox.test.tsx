import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("can be checked and unchecked", async () => {
    render(<Checkbox label="Accept terms" />);
    const input = screen.getByLabelText("Accept terms");
    await userEvent.click(input);
    expect(input).toBeChecked();
    await userEvent.click(input);
    expect(input).not.toBeChecked();
  });

  it("calls onChange when toggled", async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Accept terms" onChange={onChange} />);
    await userEvent.click(screen.getByLabelText("Accept terms"));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("is not interactive when disabled", () => {
    render(<Checkbox label="Accept terms" disabled />);
    expect(screen.getByLabelText("Accept terms")).toBeDisabled();
  });
});
