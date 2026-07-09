import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Select } from "./Select";
import { SelectTrigger } from "./SelectTrigger";
import { SelectContent } from "./SelectContent";
import { SelectOption } from "./SelectOption";

function TestSelect({ onChange }: { onChange?: (v: string) => void }) {
  return (
    <Select onChange={onChange}>
      <SelectTrigger placeholder="Choose" />
      <SelectContent>
        <SelectOption value="a" label="Option A" />
        <SelectOption value="b" label="Option B" />
        <SelectOption value="c" label="Option C" disabled />
      </SelectContent>
    </Select>
  );
}

describe("Select", () => {
  it("shows selected label for preset controlled value before opening", () => {
    render(
      <Select value="banana">
        <SelectTrigger placeholder="Choose" />
        <SelectContent>
          <SelectOption value="apple" label="Apple" />
          <SelectOption value="banana" label="Banana" />
        </SelectContent>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("Banana");
  });

  it("renders trigger with placeholder", () => {
    render(<TestSelect />);
    expect(screen.getByText("Choose")).toBeInTheDocument();
  });

  it("opens dropdown on trigger click", async () => {
    render(<TestSelect />);
    await userEvent.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("selects an option and closes dropdown", async () => {
    render(<TestSelect />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Option A"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveTextContent("Option A");
  });

  it("calls onChange with selected value", async () => {
    const onChange = vi.fn();
    render(<TestSelect onChange={onChange} />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Option B"));
    expect(onChange).toHaveBeenCalledWith("b");
  });

  it("closes on Escape key", async () => {
    render(<TestSelect />);
    await userEvent.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("does not select disabled options", async () => {
    const onChange = vi.fn();
    render(<TestSelect onChange={onChange} />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Option C"));
    expect(onChange).not.toHaveBeenCalled();
  });
});
