"use client";

import useTreeStore from "@/store/useTreeStore";
import TreeNode from "./TreeNode";
import { useEffect, useState } from "react";
import EditModal from "@/components/EditModal";

// utils
function generateTree(depth, fill) {
  let fillNum = parseInt(fill);
  if (isNaN(fillNum)) fillNum = undefined;

  if (depth === 0 || depth === "") return;

  const tree = [];
  for (let i = 0; i < depth; i++) {
    tree.push(fillNum ?? Math.floor(Math.random() * 10));
  }
  return tree;
}

export default function Tree({ setTree }) {
  const { treeData, setTreeData } = useTreeStore();
  const [fillValue, setFillValue] = useState(1);
  const [noOfNodes, setNoOfNodes] = useState(10000);

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = async () => {
    const res = await fetch("/api/");
    const data = await res.json();
    if (!data.trees) return;
    setTreeData(data.trees);
  };

  const handleSave = async () => {
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

  const handleClear = () => {
    setTreeData([]);
  };

  const handleGenerate = () => {
    setTreeData(generateTree(noOfNodes, fillValue));
  };

  return (
    <>
      <div className='flex gap-2 m-2'>
        <button className='btn btn-accent' onClick={handleSave}>
          Save
        </button>
        <button className='btn btn-accent' onClick={handleLoad}>
          Load (Reset)
        </button>
        <button className='btn btn-error btn-outline' onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className='flex gap-2 m-2'>
        <input
          type='text'
          className='input input-bordered max-w-40'
          placeholder='No. of nodes'
          value={noOfNodes}
          onChange={e => setNoOfNodes(e.target.value)}
        />
        <input
          type='text'
          className='input input-bordered max-w-20'
          placeholder='Fill'
          value={fillValue}
          onChange={e => setFillValue(e.target.value)}
        />
        <button className='btn btn-info' onClick={handleGenerate}>
          Generate
        </button>
      </div>
      {treeData?.length > 0 && (
        <div>
          <EditModal />
          <TreeNode at={0} depth={0} />
        </div>
      )}
    </>
  );
}
