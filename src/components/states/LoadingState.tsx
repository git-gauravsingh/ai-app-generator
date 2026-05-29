export default function LoadingState() {
  return (
    <div className="rounded-xl border border-slate-700 p-10 text-center">
      <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-slate-600 border-t-blue-500" />

      <p className="text-slate-400">
        Loading preview...
      </p>
    </div>
  );
}