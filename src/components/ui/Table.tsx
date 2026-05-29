interface TableProps {
  columns: string[];
  rows: string[][];
}

export default function Table({
  columns,
  rows,
}: TableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700">
      <table className="w-full">
        <thead className="bg-slate-800">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-4 py-3 text-left text-sm text-slate-300"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-t border-slate-700"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm text-white"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}