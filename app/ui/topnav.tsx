import React from "react";
import NavLinks from "./dashboard/nav-links";

export default function TopNav() {
  return (
    <div>
     {/* HEADER NAV */}
      <div>
        {/* User greeting header section */}
        <div>
          <h1>Good Mornign Dimitar!</h1>
        </div>
        {/* User Image section */}
        <div>
          <span>image goes here</span>
        </div>
      </div>
    {/* HEADER NAVL: INPUT */}
      <div>
        <input type="text" />
      </div>
    {/* HEADER NAV LINKS */}
      <div>
        <NavLinks/>
      </div>
    </div>
  );
}
