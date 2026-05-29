interface ErrorStateProps {
  message: string;
}

export default function ErrorState({
  message,
}: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-500 bg-red-950 p-3 text-red-300">
      {message}
    </div>
  );
}