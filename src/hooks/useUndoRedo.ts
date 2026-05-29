import { useState } from "react";

export default function useUndoRedo(initialValue: string) {
  const [history, setHistory] = useState([initialValue]);
  const [index, setIndex] = useState(0);

  const current = history[index];

  const setValue = (value: string) => {
    const updated = history.slice(0, index + 1);

    updated.push(value);

    setHistory(updated);
    setIndex(updated.length - 1);
  };

  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const redo = () => {
    if (index < history.length - 1) {
      setIndex(index + 1);
    }
  };

  return {
    value: current,
    setValue,
    undo,
    redo,
  };
}