interface FormProps {
  title: string;
}

export default function Form({
  title,
}: FormProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
      <h2 className="mb-4 text-lg font-semibold text-white">
        {title}
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}