import { create } from "zustand";
import { UIComponent } from "@/types/component";
import { sampleConfig } from "@/data/sampleConfig";

interface ConfigStore {
  config: UIComponent[];
  setConfig: (config: UIComponent[]) => void;

  error: string | null;
  setError: (error: string | null) => void;
}

export const useConfigStore = create<ConfigStore>((set) => ({
  config: sampleConfig,

  setConfig: (config) => set({ config }),

  error: null,

  setError: (error) => set({ error }),
}));