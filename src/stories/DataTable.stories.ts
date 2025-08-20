import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "../components/DataTable";

type User = { id: number; name: string; age: number };

const users: User[] = [
  { id: 1, name: "Rahul", age: 24 },
  { id: 2, name: "Aman", age: 22 },
  { id: 3, name: "Priya", age: 25 },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"], // ✅ enables automatic docs generation
  parameters: {
    docs: {
      description: {
        component:
          "A reusable **DataTable** with features like sorting, row selection (single/multiple), and loading state.",
      },
    },
  },
  argTypes: {
    loading: {
      control: "boolean",
      description: "Show loading spinner overlay",
    },
    selectable: {
      control: { type: "radio" },
      options: ["single", "multiple", undefined],
      description: "Enable row selection mode (single/multiple)",
    },
  },
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: users,
    columns: [
      { key: "id", title: "ID", dataIndex: "id", sortable: true },
      { key: "name", title: "Name", dataIndex: "name", sortable: true },
      { key: "age", title: "Age", dataIndex: "age", sortable: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "The default table with sorting enabled.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a spinner overlay when `loading` is true.",
      },
    },
  },
};

export const SingleSelection: Story = {
  args: {
    ...Default.args,
    selectable: "single",
  },
  parameters: {
    docs: {
      description: {
        story: "Users can select only one row using radio buttons.",
      },
    },
  },
};

export const MultipleSelection: Story = {
  args: {
    ...Default.args,
    selectable: "multiple",
  },
  parameters: {
    docs: {
      description: {
        story: "Users can select multiple rows using checkboxes.",
      },
    },
  },
};
