import { NavLink } from "react-router-dom";

function CategoryLink({ path, categoryName, children }) {
  return (
    <NavLink
      to={`${path === "items" ? "items" : `categories/${path}`}`}
      className="flex items-center justify-start gap-3 rounded-md p-2 hover:bg-stone-300 hover:font-semibold hover:text-yellow-500"
    >
      <span>{children}</span>
      <span>{categoryName}</span>
    </NavLink>
  );
}

export default CategoryLink;
