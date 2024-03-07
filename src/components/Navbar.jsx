import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto px-2 bg-blue-500 py-3">
      <div>
        <h1 className="text-3xl font-semibold text-white">Bike Innovate</h1>
      </div>
      <div>
        <ul className="flex items-center justify-center">
          {navLinks.map(({ path, title }) => (
            <li key={path} className="mx-2 text-white font-semibold">
              <NavLink exact ={ path === "/"} activeClassName="text-blue-900" href={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
