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
    <aside className="mr-10">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <ul>
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
