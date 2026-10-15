import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FormField } from "./FormField";

describe("FormField", () => {
  it("renders label and associates it with the field via htmlFor/id", () => {
    render(
      <FormField label="Email">
        {(fieldProps) => <input {...fieldProps} />}
      </FormField>,
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("shows required indicator when required is true", () => {
    render(
      <FormField label="Email" required>
        {(fieldProps) => <input {...fieldProps} />}
      </FormField>,
    );
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("shows description and links it via aria-describedby", () => {
    render(
      <FormField label="Bio" description="Tell us about yourself">
        {(fieldProps) => <textarea {...fieldProps} />}
      </FormField>,
    );
    expect(screen.getByText("Tell us about yourself")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-describedby");
  });

  it("shows error message and sets aria-invalid", () => {
    render(
      <FormField label="Email" errorMessage="Required field">
        {(fieldProps) => <input {...fieldProps} />}
      </FormField>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Required field");
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("hides description when error is present", () => {
    render(
      <FormField
        label="Email"
        description="Your work email"
        errorMessage="Required"
      >
        {(fieldProps) => <input {...fieldProps} />}
      </FormField>,
    );
    expect(screen.queryByText("Your work email")).not.toBeInTheDocument();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
