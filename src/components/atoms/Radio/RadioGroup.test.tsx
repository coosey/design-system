// RadioGroup.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders a group with a legend", () => {
    render(
      <RadioGroup name="plan" label="Choose a plan">
        <Radio value="free" label="Free" />
      </RadioGroup>,
    );
    expect(screen.getByText("Choose a plan")).toBeInTheDocument();
  });

  it("selects the correct radio based on group value", () => {
    render(
      <RadioGroup name="plan" value="pro">
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText("Pro")).toBeChecked();
    expect(screen.getByLabelText("Free")).not.toBeChecked();
  });

  it("calls onChange with the selected value", async () => {
    const onChange = vi.fn();
    render(
      <RadioGroup name="plan" value="free" onChange={onChange}>
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getByLabelText("Pro"));
    expect(onChange).toHaveBeenCalledWith("pro");
  });

  it("disables all radios when group is disabled", () => {
    render(
      <RadioGroup name="plan" disabled>
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText("Free")).toBeDisabled();
    expect(screen.getByLabelText("Pro")).toBeDisabled();
  });
});
