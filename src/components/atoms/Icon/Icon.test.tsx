import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders the correct icon by name", () => {
    render(<Icon name="check" />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("is hidden from screen readers by default (decorative)", () => {
    render(<Icon name="check" />);
    const wrapper = document.querySelector('[aria-hidden="true"]');
    expect(wrapper).toBeInTheDocument();
  });

  it("is announced when label is provided", () => {
    render(<Icon name="warning" label="Warning message" />);
    expect(
      screen.getByRole("img", { name: "Warning message" }),
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(<Icon name="check" className="custom" />);
    expect(document.querySelector(".custom")).toBeInTheDocument();
  });
});
