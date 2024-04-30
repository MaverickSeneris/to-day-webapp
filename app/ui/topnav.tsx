import React from "react";
import NavLinks from "./dashboard/nav-links";

export default function TopNav() {
  return (
    <div className="p-4">
      {/* HEADER NAV */}
      <div className="flex flex-row items-center ">
        {/* User greeting header section */}
        <div className="w-60 mr-auto">
          <h1 className="text-2xl font-regular">Good Morning Dimitar!</h1>
        </div>
        {/* User Image section */}
        <div className="bg-slate-100 w-14 h-14 rounded-full">
          <span></span>
        </div>
      </div>
      {/* HEADER NAVL: INPUT */}
      <div className="py-10 flex justify-center">
        <input
          placeholder="Search"
          type="text"
          className="rounded-md h-10 bg-zinc-900 px-2 flex-grow"
        />
      </div>
      {/* HEADER NAV LINKS */}
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
