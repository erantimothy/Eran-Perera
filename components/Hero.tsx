"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16"
      aria-label="Introduction"
    >
      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl w-full relative">
        {/* Status badge */}
        {/* <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border"
          style={{
            borderColor: "var(--border)",
            color: "var(--foreground-dim)",
            backgroundColor: "var(--surface)",
          }}
        > */}
          {/* <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#22c55e" }}
            aria-hidden="true"
          />
          available for opportunities · Colombo, Sri Lanka */}
        {/* </motion.div> */}

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Eran Timothy
          <br />
          <span style={{ color: "var(--foreground-muted)" }}>Perera</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-xl sm:text-2xl font-light italic mb-8 max-w-xl"
          style={{ color: "var(--foreground-muted)" }}
        >
          &ldquo;I build things that run quietly and reliably.&rdquo;
        </motion.p>

        {/* Bio */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base leading-relaxed mb-10 max-w-lg"
          style={{ color: "var(--foreground-muted)", fontFamily: "var(--font-sans)" }}
        >
          Software engineering student at the University of Westminster via IIT.
          I design and ship full-stack systems from database schemas to CI/CD
          pipelines with a focus on correctness, scalability, and things that
          stay up.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: "var(--accent)",
              color: "#0a0a0a",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent)")
            }
            aria-label="View projects"
          >
            view projects
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm border transition-all duration-200"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--foreground-dim)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--foreground-muted)";
            }}
            aria-label="Read blog posts"
          >
            read blog
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3 ml-2">
            {[
              {
                href: "https://github.com/EranTimothy-dev",
                icon: Github,
                label: "GitHub profile",
              },
              {
                href: "https://linkedin.com/in/erantimothy",
                icon: Linkedin,
                label: "LinkedIn profile",
              },
              {
                href: "mailto:erantimothy@gmail.com",
                icon: Mail,
                label: "Send email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded transition-colors duration-150"
                style={{ color: "var(--foreground-dim)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--foreground-dim)")
                }
                aria-label={label}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — positioned relative to the full-height section */}
      <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-6 hidden lg:flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <div
            className="w-px h-16 origin-top"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
          <span
            className="font-mono text-xs rotate-90 origin-center translate-y-4"
            style={{ color: "var(--foreground-dim)" }}
          >
            scroll
          </span>
        </motion.div>
    </section>
  );
}
