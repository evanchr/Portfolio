"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  const isActive = path.startsWith(href);

  return (
    <Link
      href={href}
      className={` font-bold py-2 px-4 rounded-md 
        hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#05a3ff] hover:to-[#0c8bd4] hover:[text-shadow:0_0_18px_rgba(3,163,255,0.8)] 
        ${isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-[#05a3ff] to-[#0c8bd4] [text-shadow:0_0_18px_rgba(3,163,255,0.8)]" : ""}`}
    >
      {children}
    </Link>
  );
}
