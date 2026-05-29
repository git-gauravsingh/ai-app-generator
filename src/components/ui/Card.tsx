interface CardProps {
  title: string;
  value: string;
}

export default function Card({
  title,
  value,
}: CardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-sm">
      <h3 className="text-sm text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}