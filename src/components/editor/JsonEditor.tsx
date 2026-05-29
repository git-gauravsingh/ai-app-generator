"use client";

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JsonEditor({
  value,
  onChange,
}: JsonEditorProps) {
  return (
    <div className="h-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-full w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-white outline-none"
        placeholder="Paste JSON here..."
      />
    </div>
  );
}