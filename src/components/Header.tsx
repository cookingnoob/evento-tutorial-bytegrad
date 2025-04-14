"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
  { href: "/", name: "Home" },
  { href: "/events/all", name: "All events" },
];

export default function Header() {
  const activePathName = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((r) => (
            <li
              key={r.href}
              className={clsx(
                "hover:text-white flex items-center relative transition",
                {
                  "text-white": activePathName === r.href,
                  "text-white/50": activePathName !== r.href,
                }
              )}
            >
              <Link href={r.href}>{r.name}</Link>
              {activePathName === r.href && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
