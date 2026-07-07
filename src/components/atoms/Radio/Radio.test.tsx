import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders label", () => {
    render(<Radio label="Option one" />);
    expect(screen.getByLabelText("Option one")).toBeInTheDocument();
  });

  it("can be selected", async () => {
    const onChange = vi.fn();
    render(<Radio label="Option one" onChange={onChange} />);
    const input = screen.getByLabelText("Option one");
    await userEvent.click(input);
    expect(input).toBeChecked();
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("only one radio selected in a group", async () => {
    render(
      <>
        <Radio label="Option one" name="group" />
        <Radio label="Option two" name="group" />
      </>,
    );
    await userEvent.click(screen.getByLabelText("Option one"));
    await userEvent.click(screen.getByLabelText("Option two"));
    expect(screen.getByLabelText("Option one")).not.toBeChecked();
    expect(screen.getByLabelText("Option two")).toBeChecked();
  });

  it("is not interactive when disabled", () => {
    render(<Radio label="Option one" disabled />);
    expect(screen.getByLabelText("Option one")).toBeDisabled();
  });
});
