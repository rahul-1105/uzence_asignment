import React, { useState } from "react";
import { ArrowUp, ArrowDown, Loader2 } from "lucide-react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: "single" | "multiple"; // ✅ row selection mode
  onRowSelect?: (selectedRows: T[]) => void;
}

export default function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<T["id"]>>(new Set());

  const handleSort = (colKey: keyof T, direction: "asc" | "desc") => {
    if (sortConfig?.key === colKey && sortConfig.direction === direction) {
      setSortConfig(null); // reset sorting
    } else {
      setSortConfig({ key: colKey, direction });
    }
  };

  const handleRowSelect = (row: T) => {
    let newSelected = new Set(selectedRows);

    if (selectable === "single") {
      newSelected = new Set([row.id]); // only one row at a time
    } else if (selectable === "multiple") {
      if (newSelected.has(row.id)) {
        newSelected.delete(row.id);
      } else {
        newSelected.add(row.id);
      }
    }

    setSelectedRows(newSelected);
    if (onRowSelect) {
      onRowSelect(data.filter((d) => newSelected.has(d.id)));
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <Loader2 className="animate-spin w-6 h-6 text-gray-600" />
        </div>
      )}

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            {selectable && <th className="px-4 py-2 border-b"></th>}
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 border-b text-left">
                <div className="flex items-center gap-2">
                  <span>{col.title}</span>
                  {col.sortable && (
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleSort(col.dataIndex, "asc")}
                        className={`p-1 rounded ${
                          sortConfig?.key === col.dataIndex && sortConfig.direction === "asc"
                            ? "bg-gray-200"
                            : ""
                        }`}
                      >
                        <ArrowUp size={14} />
                      </button>
                      <button
                        onClick={() => handleSort(col.dataIndex, "desc")}
                        className={`p-1 rounded ${
                          sortConfig?.key === col.dataIndex && sortConfig.direction === "desc"
                            ? "bg-gray-200"
                            : ""
                        }`}
                      >
                        <ArrowDown size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {!loading && sortedData.map((row) => (
            <tr
              key={row.id}
              className={`hover:bg-gray-50 ${
                selectedRows.has(row.id) ? "bg-gray-100" : ""
              }`}
            >
              {selectable && (
                <td className="px-4 py-2 border-b text-center">
                  {selectable === "multiple" ? (
                    <input
                      type="checkbox"
                      checked={selectedRows.has(row.id)}
                      onChange={() => handleRowSelect(row)}
                    />
                  ) : (
                    <input
                      type="radio"
                      checked={selectedRows.has(row.id)}
                      onChange={() => handleRowSelect(row)}
                    />
                  )}
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 border-b">
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
