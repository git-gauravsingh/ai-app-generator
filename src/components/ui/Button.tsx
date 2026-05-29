interface ButtonProps {
  label: string;
}

export default function Button({
  label,
}: ButtonProps) {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
      {label}
    </button>
  );
}