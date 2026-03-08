"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const links = [
  { href: "#projects", label: "projects" },
  { href: "#blog", label: "blog" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#certifications", label: "certs" },
  { href: "#skills", label: "skills" },
  { href: "#awards", label: "recongnition" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
          aria-label="Back to top"
        >
          <Terminal
            size={16}
            style={{ color: "var(--accent)" }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-sm"
            style={{ color: "var(--foreground-muted)" }}
          >
            etp<span style={{ color: "var(--accent)" }}>@</span>dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-xs px-3 py-2 rounded transition-colors duration-150 hover:text-white"
                style={{ color: "var(--foreground-dim)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--foreground-dim)")
                }
              >
                ./{label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/EranCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded border transition-all duration-150"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground-dim)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
              e.currentTarget.style.borderColor = "var(--foreground-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--foreground-dim)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
            aria-label="View CV"
          >
            cv
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded border transition-all duration-150"
            style={{
              borderColor: "var(--accent-border)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-muted)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--accent-border)";
            }}
            aria-label="Go to contact section"
          >
            get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground-muted)",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground-muted)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground-muted)",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 pb-4 pt-2"
          style={{
            backgroundColor: "rgba(10,10,10,0.96)",
            borderColor: "var(--border)",
          }}
        >
          <ul className="flex flex-col gap-1" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block font-mono text-sm py-2"
                  style={{ color: "var(--foreground-muted)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  ./{label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="font-mono text-sm"
                style={{ color: "var(--accent)" }}
                onClick={() => setMenuOpen(false)}
              >
                get in touch →
              </a>
              <a
                href="/EranCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm"
                style={{ color: "var(--foreground-dim)" }}
                onClick={() => setMenuOpen(false)}
              >
                view cv ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
