import { NavLink } from "react-router-dom";

export const ExploreTabs = ({ text, path }: { text: string; path: string }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `rounded-2xl text-sm border-2 text-gray-700 px-6 py-1 my-2 w-80
     ${isActive ? "bg-primary text-white border-0" : null}`
      }
    >
      {text}
    </NavLink>
  );
};
