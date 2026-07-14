import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
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

  it("handles unknown icon name gracefully", () => {
    // @ts-expect-error — testing runtime behavior with an invalid name
    expect(() => render(<Icon name="not-a-real-icon" />)).not.toThrow();
  });

  it("renders fallback placeholder for unknown icon name", () => {
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
    // @ts-expect-error — testing runtime behavior with an invalid name
    render(<Icon name="not-a-real-icon" />);
    expect(document.querySelector("svg")).toBeInTheDocument();
    expect(spy).toHaveBeenCalledWith(
      expect.stringContaining("Unknown icon name"),
    );
    spy.mockRestore();
  });
});
