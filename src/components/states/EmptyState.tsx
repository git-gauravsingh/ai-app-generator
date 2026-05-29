export default function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">
      <h3 className="text-xl font-semibold text-slate-300">
        No Components Found
      </h3>

      <p className="mt-2 text-slate-500">
        Add components in the JSON editor to see a preview.
      </p>
    </div>
  );
}