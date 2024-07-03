"use client";

import { useEffect } from "react";
import useTreeStore from "@/store/useTreeStore";
import TreeNode from "./TreeNode";

export default function Tree() {
  const { treeData, setTreeData } = useTreeStore();
  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 10000; i++) array.push(i);
    setTreeData(array);
  }, []);
  return <TreeNode at={0} depth={0} />;
}
