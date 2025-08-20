import React, { useState } from "react";
import DataTable  from "./DataTable";

const users = [
  { id: 1, name: "Rahul", age: 24 },
  { id: 2, name: "Aman", age: 22 },
  { id: 3, name: "Priya", age: 25 },
];

export default function Tables() {
  const [loading, setLoading] = useState(false);

  const handleRowSelect = (rows: typeof users) => {
    console.log("Selected Rows:", rows);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">User Table</h1>
      <button
        className="mb-2 px-3 py-1 border rounded"
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000); // simulate API
        }}
      >
        Toggle Loading
      </button>

      <DataTable
        data={users}
        columns={[
          { key: "id", title: "ID", dataIndex: "id", sortable: true },
          { key: "name", title: "Name", dataIndex: "name", sortable: true },
          { key: "age", title: "Age", dataIndex: "age", sortable: true },
        ]}
        loading={loading}
        selectable="multiple"
        onRowSelect={handleRowSelect}
      />
    </div>
  );
}
