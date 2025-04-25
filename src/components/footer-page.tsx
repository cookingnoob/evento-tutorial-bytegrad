import Link from "next/link";

const routes = [
  { path: "/privacy-policy", name: "Pivacy Policy" },
  { path: "/terms-conditions", name: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2050 Bytegrad all rights reserved
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((r) => (
          <li key={r.path}>
            <Link href={r.path}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
