import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  it("renders children in body", () => {
    render(
      <Card>
        <CardBody>Card content</CardBody>
      </Card>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders header, body and footer", () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders without header or footer", () => {
    render(
      <Card>
        <CardBody>Body only</CardBody>
      </Card>,
    );
    expect(screen.getByText("Body only")).toBeInTheDocument();
  });

  it("throws when slot used outside Card", () => {
    // suppress console.error for this test
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<CardBody>Orphan</CardBody>)).toThrow();
    spy.mockRestore();
  });

  it("forwards className and html attributes", () => {
    render(
      <Card data-testid="card">
        <CardBody>Content</CardBody>
      </Card>,
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
