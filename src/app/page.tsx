"use client";

import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels";

import useTheme from "@/hooks/useTheme";
import { useCallback, useEffect } from "react";
import useUndoRedo from "@/hooks/useUndoRedo";
import ErrorState from "@/components/states/ErrorState";
import Toolbar from "@/components/editor/Toolbar";
import JsonEditor from "@/components/editor/JsonEditor";
import DynamicRenderer from "@/components/renderer/DynamicRenderer";

import { useConfigStore } from "@/store/useConfigStore";

export default function Home() {
  const {
    config,
    setConfig,
    error,
    setError,
  } = useConfigStore();

  const { theme, toggleTheme } = useTheme();

  const {
    value: jsonText,
    setValue: setJsonText,
    undo,
    redo,
  } = useUndoRedo(
    JSON.stringify(config, null, 2)
  );

  const handleExport = useCallback(() => {
    const blob = new Blob([jsonText], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "config.json";

    a.click();

    URL.revokeObjectURL(url);
  }, [jsonText]);

  const handleImport = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result as string;
      setJsonText(content);
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    try {
      const parsed = JSON.parse(jsonText);

      setConfig(parsed);
      setError(null);
    } catch {
      setError("Invalid JSON");
    }
  }, [jsonText, setConfig, setError]);

  return (
    <main
  className={`min-h-screen ${
    theme === "dark"
      ? "bg-slate-950 text-white"
      : "bg-white text-black"
  }`}
>
      <header className="border-b border-slate-800 px-6 py-4">
        <h1 className="text-3xl font-bold">
          AI App Generator
        </h1>

        <p className="text-slate-400">
          Dynamic UI rendering from configuration
        </p>
      </header>

      <Group
        orientation="horizontal"
        className="h-[calc(100vh-90px)]"
      >
        <Panel defaultSize={50}>
          <section className="flex h-full flex-col p-6">
            <h2 className="mb-4 text-xl font-semibold">
              JSON Editor
            </h2>

            <Toolbar
              onExport={handleExport}
              onImport={handleImport}
              onUndo={undo}
              onRedo={redo}
              onThemeToggle={toggleTheme}
            />

            <div className="flex-1">
              <JsonEditor
                value={jsonText}
                onChange={setJsonText}
              />
            </div>

            {error && (
              <div className="mt-3">
                <ErrorState message={error} />
              </div>
            )}
          </section>
        </Panel>

        <Separator className="w-2 bg-slate-800 hover:bg-slate-700" />

        <Panel defaultSize={50}>
          <section className="h-full overflow-auto p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Live Preview
            </h2>

            <DynamicRenderer components={config} />
          </section>
        </Panel>
      </Group>
    </main>
  );
}