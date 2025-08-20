import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    label: "Username",
    placeholder: "Enter text...",
    helperText: "",
    variant: "outlined",
    size: "medium",
    error: false,
    disabled: false,
    loading: false,
    password: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outlined", "filled", "ghost"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    password: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const WithHelperText: Story = {
  args: {
    helperText: "Helper text goes here",
  },
};

/* -------------------- Variants -------------------- */
export const Outlined: Story = {
  args: {
    variant: "outlined",
    helperText: "",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    helperText: "",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    helperText: "",
  },
};

/* -------------------- Sizes -------------------- */
export const Small: Story = {
  args: {
    size: "small",
    helperText: "",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    helperText: "",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    helperText: "",
  },
};

/* -------------------- States -------------------- */
export const Error: Story = {
  args: {
    error: true,
    helperText: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input",
    helperText: "",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    helperText: "",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    password: true,
    placeholder: "Enter password",
    helperText: "Length must be at least 8 characters",
  },
};


