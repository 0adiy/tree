"use client";

import { memo } from "react";
import useTreeStore from "@/store/useTreeStore";

const colors = [
  "bg-gray-800",
  "bg-red-800",
  "bg-yellow-800",
  "bg-green-800",
  "bg-blue-800",
  "bg-purple-800",
];

function leftChildat(index) {
  let x = index + 1;
  return x * 2 - 1;
}

function rightChildat(index) {
  let x = index + 1;
  return x * 2;
}

function TreeNode({
  at,
  onClick,
  onMouseEnter,
  onMouseLeave,
  depth,
  ...props
}) {
  const { treeData } = useTreeStore();
  const handleClick = () => {
    onClick && onClick(data);
  };

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(data);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave(data);
  };

  return (
    <div
      className='flex items-stretch'
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* current node */}
      <div className='flex items-center justify-center'>
        <div
          className={`text-center text-white rounded-full grid place-items-center m-2 btn btn-circle ${
            colors[depth % colors.length]
          }`}
        >
          {treeData[at]}
        </div>
      </div>

      {/* edges */}
      <div className='flex flex-col justify-center'>
        {leftChildat(at) < treeData.length && (
          <div className='flex-1 bg-red-500 min-h-4 w-2 [clip-path:polygon(4px_100%,_0_100%,_0_50%,_100%_50%,_100%_calc(50%+4px),_4px_calc(50%+4px))]'></div>
        )}
        {rightChildat(at) < treeData.length && (
          <div className='flex-1 bg-blue-500 min-h-4 w-2 [clip-path:polygon(4px_0,_0_0,_0_50%,_100%_50%,_100%_calc(50%_-_4px),_4px_calc(50%_-_4px))]'></div>
        )}
      </div>

      {/* level below the current node */}
      <div className='flex flex-col justify-center'>
        {leftChildat(at) < treeData.length && (
          <TreeNode at={leftChildat(at)} depth={depth + 1} />
        )}
        {rightChildat(at) < treeData.length && (
          <TreeNode at={rightChildat(at)} depth={depth + 1} />
        )}
      </div>
    </div>
  );
}

const TreeNodeMemo = memo(TreeNode);

export default TreeNodeMemo;
