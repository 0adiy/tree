"use client";

import useTreeStore from "../../store/useTreeStore";

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

export default function TreeNode({
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
    treeData.length > at && (
      <div
        className={`flex flex-col items-center`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* current node */}
        <div
          className={`h-8 p-1 text-center  text-white rounded-full grid place-items-center m-2 ${
            colors[depth % colors.length]
          }`}
        >
          {treeData[at]}
        </div>
        {/* level below the current node */}
        <div className='flex justify-center'>
          <TreeNode at={leftChildat(at)} depth={depth + 1} />
          <TreeNode at={rightChildat(at)} depth={depth + 1} />
        </div>
      </div>
    )
  );
}
