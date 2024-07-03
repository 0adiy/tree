import { create } from "zustand";

const useTreeStore = create(set => ({
  treeData: [],
  setTreeData: data => set({ treeData: data }),
  addNode: data => set({ treeData: [...treeData, data] }),
  clearTree: () => set({ treeData: [] }),
}));

export default useTreeStore;
