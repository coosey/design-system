import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";

describe("Avatar", () => {
  it("renders image when src is provided", () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="Jane Doe" />);
    expect(screen.getByAltText("Jane Doe")).toBeInTheDocument();
  });

  it("renders initials when name is provided and no src", () => {
    render(<Avatar name="Jane Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders single initial for single name", () => {
    render(<Avatar name="Jane" />);
    expect(screen.getByText("J")).toBeInTheDocument();
  });

  it("falls back to icon when no src or name", () => {
    render(<Avatar />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("falls back to initials when image fails to load", async () => {
    render(<Avatar src="bad-url.jpg" name="Jane Doe" />);
    const img = screen.getByAltText("Jane Doe");
    img?.dispatchEvent(new Event("error"));
    expect(await screen.findByText("JD")).toBeInTheDocument();
  });

  it("renders status indicator when status is provided", () => {
    const { container } = render(<Avatar name="Jane Doe" status="online" />);
    expect(container.querySelector('[title="online"]')).toBeInTheDocument();
  });
});

describe("AvatarGroup", () => {
  const avatars = [
    { name: "Jane Doe" },
    { name: "John Smith" },
    { name: "Alice Wong" },
    { name: "Bob Chen" },
    { name: "Carol White" },
  ];

  it("renders max avatars and overflow count", () => {
    render(<AvatarGroup avatars={avatars} max={3} />);
    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("renders all avatars when count is within max", () => {
    render(<AvatarGroup avatars={avatars.slice(0, 3)} max={4} />);
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it("has accessible group label", () => {
    render(<AvatarGroup avatars={avatars} />);
    expect(
      screen.getByRole("group", { name: "5 avatars" }),
    ).toBeInTheDocument();
  });
});
