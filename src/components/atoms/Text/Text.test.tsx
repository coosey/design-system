import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders body variant as a p tag by default", () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText("Hello").tagName).toBe("P");
  });

  it("renders display/h1/h2/h3 variants as heading elements by default", () => {
    const { rerender } = render(<Text variant="h1">Heading</Text>);
    expect(screen.getByText("Heading").tagName).toBe("H1");

    rerender(<Text variant="h2">Heading</Text>);
    expect(screen.getByText("Heading").tagName).toBe("H2");

    rerender(<Text variant="h3">Heading</Text>);
    expect(screen.getByText("Heading").tagName).toBe("H3");
  });

  it("renders caption as span by default", () => {
    render(<Text variant="caption">Meta</Text>);
    expect(screen.getByText("Meta").tagName).toBe("SPAN");
  });

  it("overrides element via as prop", () => {
    render(
      <Text as="h1" variant="h3">
        Title
      </Text>,
    );
    expect(screen.getByText("Title").tagName).toBe("H1");
  });

  it("forwards className and other html attributes", () => {
    render(<Text data-testid="text-el">Content</Text>);
    expect(screen.getByTestId("text-el")).toBeInTheDocument();
  });
});
