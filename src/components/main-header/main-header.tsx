import Link from "next/link";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className="relative bg-transparent">
      <MainHeaderBackground />

      {/* Header Content */}
      <div className="relative z-10 flex items-center justify-between px-4 py-8 md:px-[10%]">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-8 font-bold font-sans text-xl uppercase tracking-wide">
          Portfolio
        </Link>

        <nav>
          <ul className="flex gap-6 text-lg text-white">
            <li>
              <NavLink href="/projets" >
                Mes projets
              </NavLink>
            </li>
            <li>
              <NavLink href="/about">
                A propos de moi
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
