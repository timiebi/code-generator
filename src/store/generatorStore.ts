import {create} from "zustand"

interface StoreState {
    open_generator: boolean;
    toggleOpenGenerator: () => void;
  }

const useGeneratorStore = create<StoreState>((set) =>({
    // state
    open_generator: false,
    setOpenGenerator: (open: boolean) => set({ open_generator: open }),
    toggleOpenGenerator: () => set((state) => ({open_generator: !state.open_generator}))
}))

export default useGeneratorStore