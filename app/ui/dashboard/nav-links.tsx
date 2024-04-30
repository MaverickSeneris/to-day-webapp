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
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
