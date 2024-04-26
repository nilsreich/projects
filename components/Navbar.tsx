"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="border-b sticky w-full top-0 backdrop-blur-sm bg-background/70">
    <div className="p-4 flex gap-4 max-w-screen-2xl mx-auto text-sm">
    
      <Link className={`${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`} href="/">
        Blog
      </Link>
      <Link
        className={`${pathname.includes("/projects") ? "text-foreground" : "text-muted-foreground"}`}
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className={`${pathname === "/snippets" ? "text-foreground" : "text-muted-foreground"}`}
        href="/snippets"
      >
        Snippets
      </Link>
      <Link
        className={`${pathname === "/about" ? "text-foreground" : "text-muted-foreground"}`}
        href="/about"
      >
        About
      </Link>
    </div></div>
  );
};
