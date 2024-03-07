import NavLink from "@/components/NavLink";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-bike",
    title: "Add Bike",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="mr-10 mt-12 border-2 border-gray-200 p-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <hr className="border-1 border-gray-300"/>
      <ul className="my-12 text-lg font-semibold text-gray-600">
        {navLinks.map(({ path, title }) => (
          <li key={path} className="my-2">
            <NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
