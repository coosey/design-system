import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { FormField } from "../FormField/FormField";
import type { SearchFieldProps } from "./SearchField";
import { SearchField } from "./SearchField";

const meta: Meta<SearchFieldProps> = {
  title: "Components/SearchField",
  component: SearchField,
  args: {
    placeholder: "Search",
    size: "md",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<SearchFieldProps>;

export const Default: Story = {
  args: { "aria-label": "Search" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <SearchField aria-label="Small search" size="sm" placeholder="Small" />
      <SearchField aria-label="Medium search" size="md" placeholder="Medium" />
      <SearchField aria-label="Large search" size="lg" placeholder="Large" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    "aria-label": "Search",
    defaultValue: "design tokens",
    loading: true,
  },
};

export const Disabled: Story = {
  args: { "aria-label": "Search", disabled: true },
};

export const WithFormField: Story = {
  render: () => (
    <FormField label="Find teammates" description="Search by name or email">
      {(fieldProps) => (
        <SearchField {...fieldProps} placeholder="e.g. Jane Doe" />
      )}
    </FormField>
  ),
};

const fruits = ["Apple", "Banana", "Blueberry", "Cherry", "Grape", "Mango"];

export const DebouncedResults: Story = {
  render: () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(fruits);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const timeout = setTimeout(() => {
        setResults(
          fruits.filter((f) => f.toLowerCase().includes(query.toLowerCase())),
        );
        setLoading(false);
      }, 400);
      return () => clearTimeout(timeout);
    }, [query]);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SearchField
          aria-label="Search fruits"
          placeholder="Search fruits"
          value={query}
          onChange={setQuery}
          loading={loading}
        />
        <ul style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}>
          {results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    );
  },
};
