interface UnknownComponentProps {
    type: string;
}

export default function UnknownComponent({
    type,
}: UnknownComponentProps) {
    return (
        <div className="rounded-xl border border-yellow-600 bg-yellow-950 p-4">
            <h3 className="font-semibold text-yellow-400">
                Unknown Component
            </h3>

            <p className="mt-2 text-yellow-200">
                Component type <span className="font-semibold">{type}</span> is not supported.
            </p>
        </div>
    );
}