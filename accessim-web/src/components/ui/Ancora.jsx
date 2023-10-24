import { Link } from "react-router-dom";

export const Ancora = ({ children, path }) => {
  return (
    <Link
      to={path}
      className="font-semibold text-purple-600 hover:text-purple-500 duration-200"
    >
      {children}
    </Link>
  );
};
