"use client";

import useTreeStore from "@/store/useTreeStore";
import TreeNode from "./TreeNode";
import { useEffect } from "react";
import EditModal from "@/components/EditModal";

export default function Tree({ setTree }) {
  const { treeData, setTreeData } = useTreeStore();

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = async () => {
    const res = await fetch("/api/");
    const data = await res.json();
    if (!data.trees) return;
    setTreeData(data.trees);
  };

  const handleClick = async () => {
    try {
      const res = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(treeData),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className='btn btn-accent' onClick={handleClick}>
        Save
      </button>
      <button className='btn btn-accent' onClick={handleLoad}>
        Load
      </button>
      <EditModal />
      <TreeNode at={0} depth={0} />
    </div>
  );
}
