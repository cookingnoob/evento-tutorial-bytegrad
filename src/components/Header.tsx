import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const routes = [
  { href: "/", name: "Home" },
  { href: "/events/all", name: "All events" },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((r) => (
            <li
              key={r.href}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={r.href}>{r.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
