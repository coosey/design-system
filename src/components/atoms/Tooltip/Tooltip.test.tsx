import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "../Button/Button";
import { Tooltip } from "./Tooltip";

const TestTooltip = ({ label = "Tooltip text", disabled = false }) => (
  <Tooltip label={label} delay={0} disabled={disabled}>
    <Button>Trigger</Button>
  </Tooltip>
);

describe("Tooltip", () => {
  it("does not show tooltip by default", () => {
    render(<TestTooltip />);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("shows tooltip on hover", async () => {
    render(<TestTooltip />);
    await userEvent.hover(screen.getByRole("button"));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  it("hides tooltip on mouse leave", async () => {
    render(<TestTooltip />);
    await userEvent.hover(screen.getByRole("button"));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    await userEvent.unhover(screen.getByRole("button"));
    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("shows tooltip on focus", async () => {
    render(<TestTooltip />);
    await userEvent.tab();
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("does not show tooltip when disabled", async () => {
    render(<TestTooltip disabled />);
    await userEvent.hover(screen.getByRole("button"));
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
