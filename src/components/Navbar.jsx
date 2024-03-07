"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import useAuth from "@/hooks/useAuth";

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
  {
    path: "/login",
    title: "Login",
  },
];

const Navbar = () => {
  const user = useAuth();
  const { uid, displayName, photoUrl } = user || {};

  // const navData = uid ? afterLoginNavData : beforeLoginNavData;

  const [navToggle, setNavToggle] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="flex items-center justify-between container mx-auto px-2 bg-blue-500 py-3">
      <div>
        <h1 className="text-4xl font-bold text-white">Bike Innovate</h1>
      </div>
      <div>
        <ul className="flex items-center justify-center">
          {navLinks.map(({ path, title }) => (
            <li key={path} className="mx-2 text-white font-semibold">
              <NavLink
                exact={path === "/"}
                activeClassName="text-blue-900"
                href={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <Image
            className="rounded-full"
            width={64}
            height={72}
            src={profile}
            alt=""
          ></Image>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
