import React from "react";

export const SecondaryButton = ({ children, hanldeClick }) => {
  return (
    <button
      className="px-4 py-2 border font-semibold capitalize tracking-wider border-slate-800 hover:bg-slate-800 duration-200 rounded-full"
      onClick={hanldeClick}
    >
      {children}
    </button>
  );
};
