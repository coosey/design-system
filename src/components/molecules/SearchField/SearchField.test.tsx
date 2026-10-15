import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { FormField } from "../FormField/FormField";
import { SearchField } from "./SearchField";

describe("SearchField", () => {
  it("renders a searchbox with default placeholder", () => {
    render(<SearchField aria-label="Search" />);
    const input = screen.getByRole("searchbox");
    expect(input).toHaveAttribute("placeholder", "Search");
  });

  it("calls onChange with the string value as the user types", async () => {
    const onChange = vi.fn();
    render(<SearchField aria-label="Search" onChange={onChange} />);
    await userEvent.type(screen.getByRole("searchbox"), "ab");
    expect(onChange).toHaveBeenLastCalledWith("ab");
  });

  it("only shows the clear button when there is a value", async () => {
    render(<SearchField aria-label="Search" />);
    expect(
      screen.queryByRole("button", { name: "Clear search" }),
    ).not.toBeInTheDocument();
    await userEvent.type(screen.getByRole("searchbox"), "hello");
    expect(
      screen.getByRole("button", { name: "Clear search" }),
    ).toBeInTheDocument();
  });

  it("clears the value, calls onClear, and refocuses the input", async () => {
    const onClear = vi.fn();
    render(
      <SearchField
        aria-label="Search"
        defaultValue="hello"
        onClear={onClear}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Clear search" }));
    const input = screen.getByRole("searchbox");
    expect(input).toHaveValue("");
    expect(input).toHaveFocus();
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("calls onSearch with the current value on Enter", async () => {
    const onSearch = vi.fn();
    render(<SearchField aria-label="Search" onSearch={onSearch} />);
    await userEvent.type(screen.getByRole("searchbox"), "query{Enter}");
    expect(onSearch).toHaveBeenCalledWith("query");
  });

  it("clears the value on Escape", async () => {
    render(<SearchField aria-label="Search" defaultValue="hello" />);
    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "{Escape}");
    expect(input).toHaveValue("");
  });

  it("works as a controlled component", async () => {
    const Controlled = () => {
      const [value, setValue] = useState("start");
      return (
        <>
          <SearchField aria-label="Search" value={value} onChange={setValue} />
          <span data-testid="mirror">{value}</span>
        </>
      );
    };
    render(<Controlled />);
    await userEvent.click(screen.getByRole("button", { name: "Clear search" }));
    expect(screen.getByTestId("mirror")).toBeEmptyDOMElement();
  });

  it("shows a spinner and hides the clear button while loading", () => {
    render(<SearchField aria-label="Search" defaultValue="hello" loading />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Clear search" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toHaveAttribute("aria-busy", "true");
  });

  it("integrates with FormField for label and error wiring", () => {
    render(
      <FormField label="Find users" errorMessage="No results">
        {(fieldProps) => <SearchField {...fieldProps} />}
      </FormField>,
    );
    const input = screen.getByLabelText("Find users");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby");
  });
});
