import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const ROUTES = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-iron/90 backdrop-blur-md border-b border-mullion/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold text-chalk tracking-tight shrink-0">
          Anoop Mishra
        </Link>

        <div className="hidden lg:flex items-center gap-6 font-body text-sm">
          {ROUTES.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              end={r.to === "/"}
              className={({ isActive }) =>
                `relative py-1 whitespace-nowrap transition-colors ${
                  isActive ? "text-chalk" : "text-fog hover:text-chalk"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {r.label}
                  {isActive && <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-brass-light" />}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <a
          href="tel:+918318641198"
          className="hidden lg:inline-flex items-center gap-2 text-sm font-body px-4 py-2 rounded-full border border-mullion text-chalk hover:border-brass-light hover:text-brass-light transition-colors shrink-0"
        >
          Call now
        </a>

        <button
          className="lg:hidden text-chalk shrink-0"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4 font-body text-sm">
          {ROUTES.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              end={r.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "text-chalk" : "text-fog")}
            >
              {r.label}
            </NavLink>
          ))}
          <a href="tel:+918318641198" className="text-brass-light">
            Call now — +91-8318641198
          </a>
        </div>
      )}
    </header>
  );
}
