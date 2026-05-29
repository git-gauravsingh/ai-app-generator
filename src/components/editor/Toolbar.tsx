interface ToolbarProps {
    onExport: () => void;
    onImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onUndo: () => void;
    onRedo: () => void;
    onThemeToggle: () => void;
}

export default function Toolbar({
    onExport,
    onImport,
    onUndo,
    onRedo,
    onThemeToggle,
}: ToolbarProps) {
    return (
        <div className="mb-4 flex gap-3">
            <button
                onClick={onUndo}
                className="rounded-lg bg-slate-700 px-4 py-2 text-white"
            >
                ↶ Undo
            </button>

            <button
                onClick={onRedo}
                className="rounded-lg bg-slate-700 px-4 py-2 text-white"
            >
                ↷ Redo
            </button>

            <button
                onClick={onExport}
                className="rounded-lg bg-green-600 px-4 py-2 text-white"
            >
                Export JSON
            </button>

            <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white">
                Import JSON

                <input
                    type="file"
                    accept=".json"
                    className="hidden"
                    onChange={onImport}
                />
            </label>
        </div>
    );

    <button
        onClick={onThemeToggle}
        className="rounded-lg bg-purple-600 px-4 py-2 text-white"
    >
        Theme
    </button>
}