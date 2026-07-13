import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Select } from "./Select";
import { SelectContent } from "./SelectContent";
import { SelectOption } from "./SelectOption";
import { SelectTrigger } from "./SelectTrigger";

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    children: null,
  },
  argTypes: {
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "durian", label: "Durian", disabled: true },
];

export const Example: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>();
    return (
      <Select value={value} onChange={setValue} {...args}>
        <SelectTrigger placeholder="Choose a fruit" />
        <SelectContent>
          {options.map((option) => (
            <SelectOption key={option.value} {...option} />
          ))}
        </SelectContent>
      </Select>
    );
  },
};

export const WithValue: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Select value="banana">
      <SelectTrigger placeholder="Choose a fruit" />
      <SelectContent>
        {options.map((option) => (
          <SelectOption key={option.value} {...option} />
        ))}
      </SelectContent>
    </Select>
  ),
};

export const Invalid: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Select invalid>
      <SelectTrigger placeholder="Choose a fruit" />
      <SelectContent>
        {options.map((option) => (
          <SelectOption key={option.value} {...option} />
        ))}
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Select disabled>
      <SelectTrigger placeholder="Choose a fruit" />
      <SelectContent>
        {options.map((option) => (
          <SelectOption key={option.value} {...option} />
        ))}
      </SelectContent>
    </Select>
  ),
};

export const AllSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 300,
      }}
    >
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select key={size}>
          <SelectTrigger placeholder={`Size: ${size}`} size={size} />
          <SelectContent size={size}>
            {options.map((option) => (
              <SelectOption key={option.value} {...option} size={size} />
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
};
