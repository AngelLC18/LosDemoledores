export const FirstButton = ({ children, hanldeClick }) => {
  return (
    <button
      className="px-4 py-2 border font-semibold tracking-wider border-slate-800 bg-slate-950 hover:bg-slate-900 duration-200 rounded-full capitalize"
      onClick={hanldeClick}
    >
      {children}
    </button>
  );
};
