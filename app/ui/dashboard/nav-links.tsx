"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  // TODO: add a icon
  { name: "All Notes", href: "/dashboard/" },
  {
    name: "Home",
    href: "/dashboard/home",
  },
  { name: "Work", href: "/dashboard/work" },
];

export default function NavLinks() {
  return (
    <div className="flex gap-7">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p className="text-xl">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
