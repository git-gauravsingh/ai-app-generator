interface InputProps {
  label: string;
  placeholder?: string;
}

export default function Input({
  label,
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-slate-300">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none"
      />
    </div>
  );
}