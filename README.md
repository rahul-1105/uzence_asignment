# Uzence Assignment

## React Component Library

This repository contains **reusable React components**:

1. **TextInput** – A customizable input field with variants, sizes, loading state, and error handling.  
2. **DataTable** – A flexible table with sorting, single/multiple row selection, and loading state.

### [View Storybook](https://uzence-asignment.vercel.app)

---

## 📦 Installation

Install dependencies (React, Tailwind CSS, and lucide-react icons should already be in your project):

```bash
npm install
# or
yarn install
```

## 📝 Components

### 1. TextInput

A fully customizable text input component.

#### TextInput Props Table

| Prop          | Type                                | Description                           |
| ------------- | ----------------------------------- | ------------------------------------- |
| `label`       | `string`                            | Label text above the input.           |
| `placeholder` | `string`                            | Placeholder text inside the input.    |
| `error`       | `boolean`                           | Show error state if true.             |
| `helperText`  | `string`                            | Optional helper text below the input. |
| `loading`     | `boolean`                           | Show a loading spinner inside input.  |
| `disabled`    | `boolean`                           | Disable the input field.              |
| `variant`     | `'outlined' \| 'filled' \| 'ghost'` | Input style variant.                  |
| `size`        | `'small' \| 'medium' \| 'large'`    | Size of the input field.              |

### 2. DataTable

#### DataTable Props Table

| Prop          | Type                          | Description                                     |
| ------------- | ----------------------------- | ----------------------------------------------- |
| `data`        | `T[]`                         | Array of objects to display in the table.       |
| `columns`     | `Column<T>[]`                 | Column definitions. See Column interface below. |
| `loading`     | `boolean`                     | Show a loading overlay when true.               |
| `selectable`  | `'single' \| 'multiple'`      | Enable single or multiple row selection.        |
| `onRowSelect` | `(selectedRows: T[]) => void` | Callback function when rows are selected.       |


#### Column Interface Table

| Prop        | Type      | Description                                           |
| ----------- | --------- | ----------------------------------------------------- |
| `key`       | `string`  | Unique key for the column.                            |
| `title`     | `string`  | Column header text.                                   |
| `dataIndex` | `keyof T` | The key of the data object to display in this column. |
| `sortable`  | `boolean` | Enable sorting on this column if true.                |

## 🎨 Storybook

All components are fully documented in Storybook.

### Run Storybook locally:

```bash
npm run storybook
# or
yarn storybook
```

### Build Storybook for deployment:

```bash
npm run build-storybook
# or
yarn build-storybook
```
The static site is generated in the storybook-static folder, ready to deploy to Vercel, Netlify, or any static hosting platform.

## 📦 Deployment to Vercel

1. Push your repo to GitHub.

2. Connect the repo in Vercel.

3. Set build command:
   
```bash
npm run build-storybook
```

4. Set output directory:

```bash
storybook-static
```

Deploy! Your Storybook will be hosted and auto-updated on every push.
