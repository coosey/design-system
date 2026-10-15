import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Select } from "../../atoms/Select/Select";
import { SelectContent } from "../../atoms/Select/SelectContent";
import { SelectOption } from "../../atoms/Select/SelectOption";
import { SelectTrigger } from "../../atoms/Select/SelectTrigger";
import type { FormFieldProps } from "./FormField";
import { FormField } from "./FormField";

const meta: Meta<FormFieldProps> = {
  title: "Components/FormField",
  component: FormField,
};

export default meta;
type Story = StoryObj<FormFieldProps>;

export const WithSelect: Story = {
  render: () => {
    const [plan, setPlan] = useState<string>();
    return (
      <div style={{ width: 300 }}>
        <FormField
          label="Plan"
          description="Choose your subscription tier"
          required
        >
          {(fieldProps) => (
            <Select value={plan} onChange={setPlan}>
              <SelectTrigger {...fieldProps} placeholder="Select a plan" />
              <SelectContent>
                <SelectOption value="free" label="Free" />
                <SelectOption value="pro" label="Pro" />
                <SelectOption value="enterprise" label="Enterprise" />
              </SelectContent>
            </Select>
          )}
        </FormField>
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [plan, setPlan] = useState<string>();
    return (
      <div style={{ width: 300 }}>
        <FormField label="Plan" errorMessage="Please select a plan" required>
          {(fieldProps) => (
            <Select value={plan} onChange={setPlan} invalid>
              <SelectTrigger {...fieldProps} placeholder="Select a plan" />
              <SelectContent>
                <SelectOption value="free" label="Free" />
                <SelectOption value="pro" label="Pro" />
              </SelectContent>
            </Select>
          )}
        </FormField>
      </div>
    );
  },
};

export const WithCustomInput: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <FormField label="Bio" description="A short description about yourself">
        {(fieldProps) => (
          <textarea
            {...fieldProps}
            rows={4}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              padding: 8,
              border: "1px solid #D6D3D1",
              borderRadius: 6,
              resize: "vertical",
            }}
          />
        )}
      </FormField>
    </div>
  ),
};
