import { create } from "zustand";

let intialTreeArray = [];
for (let i = 1; i <= 10000; i++) intialTreeArray.push(1);

const useTreeStore = create(set => ({
  treeData: intialTreeArray,
  setTreeData: data => set({ treeData: data }),
  addNode: data => set({ treeData: [...treeData, data] }),
  clearTree: () => set({ treeData: [] }),
}));

export default useTreeStore;
