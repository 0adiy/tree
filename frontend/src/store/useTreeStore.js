import { create } from "zustand";

let intialTreeArray = [];
for (let i = 1; i <= 100; i++) intialTreeArray.push(1);

// utils
function getParentAt(index) {
  return Math.floor((index - 1) / 2);
}

const useTreeStore = create((set, get) => ({
  treeData: intialTreeArray,
  setTreeData: data => set({ treeData: data }),
  addNode: data => set({ treeData: [...treeData, data] }),
  clearTree: () => set({ treeData: [] }),

  currentNodeAt: 0,
  setCurrentNodeAt: at => set({ currentNodeAt: at }),
  editModalVisible: false,
  openEditModal: () => set({ editModalVisible: true }),
  closeEditModal: () => set({ editModalVisible: false }),

  enteredValue: 0,
  setEnteredValue: value => set({ enteredValue: value }),

  EditTree: () => {
    const curr = get().currentNodeAt;
    const newTreeData = get().treeData;
    const enteredValue = get().enteredValue;

    console.log(curr);

    let i = curr;
    while (i >= 0) {
      console.log(i);
      newTreeData[i] = enteredValue;
      i = getParentAt(i);
    }
    console.log(newTreeData);
    set({ treeData: newTreeData });
  },
}));

export default useTreeStore;
