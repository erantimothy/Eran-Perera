"use client";

import { Github, Linkedin, Mail, Globe } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/EranTimothy-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/erantimothy",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:erantimothy@gmail.com",
  },
  {
    icon: Globe,
    label: "erantimothy.dev",
    href: "https://erantimothy.dev",
  },
];

export default function Footer() {
  return (
    <footer
      className="px-6 py-16 border-t"
      style={{ borderColor: "var(--border)" }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Identity */}
          <div>
            <p
              className="font-mono text-sm font-medium mb-1"
              style={{ color: "var(--foreground)" }}
            >
              Eran Timothy Perera
            </p>
            <p className="font-mono text-xs" style={{ color: "var(--foreground-dim)" }}>
              Software Engineering Student · Colombo, Sri Lanka
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-150"
                style={{ color: "var(--foreground-dim)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--foreground-dim)")
                }
                aria-label={label}
              >
                <Icon size={14} aria-hidden="true" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--foreground-dim)" }}>
            © {new Date().getFullYear()} Eran Timothy Perera. All rights reserved.
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--foreground-dim)" }}>
            built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
