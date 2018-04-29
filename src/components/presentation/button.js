import React from "react";

const BASE_CLASSES = [
  "shadow-md",
  "hover:bg-red-dark",
  "rounded",
  "bg-red",
  "p-3",
  "text-white"
];

export default ({ onClick, classes, children }) => {
  const mergedClasses = BASE_CLASSES.concat(classes).join(" ");
  return (
    <button class={mergedClasses} onClick={onClick}>
      {children}
    </button>
  );
};
