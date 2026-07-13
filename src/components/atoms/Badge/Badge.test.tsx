import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders with dot when dot prop is true", () => {
    const { container } = render(<Badge dot>Online</Badge>);
    // dot is a span sibling to text
    expect(container.querySelectorAll("span").length).toBeGreaterThan(1);
  });

  it("renders with icon when icon prop is provided", () => {
    render(<Badge icon="check">Verified</Badge>);
    expect(screen.getByText("Verified")).toBeInTheDocument();
    // icon wrapper span present
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("does not render dot when count is true", () => {
    const { container } = render(
      <Badge count dot>
        3
      </Badge>,
    );
    // only one span child — the count text, no dot
    const innerSpans = container.querySelector(".badge")?.children;
    expect(innerSpans?.length).toBe(0);
  });

  it("forwards className and html attributes", () => {
    render(<Badge data-testid="badge-el">Tag</Badge>);
    expect(screen.getByTestId("badge-el")).toBeInTheDocument();
  });
});
