"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

interface GitHubStats {
  repos: number | null;
  stars: number | null;
}

export default function Hero() {
  const [stats, setStats] = useState<GitHubStats>({ repos: null, stars: null });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/EranTimothy-dev"),
          fetch("https://api.github.com/users/EranTimothy-dev/repos?per_page=100"),
        ]);
        const user = await userRes.json();
        const repos = await reposRes.json();
        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count, 0)
          : 0;
        setStats({ repos: user.public_repos ?? 0, stars: totalStars });
      } catch {
        // silently fail — stats stay null
      }
    }
    fetchStats();
  }, []);

  const floatingIcons = [
    { src: "/hero_images/docker_icon-removebg-preview.png",        alt: "Docker",  size: 80,  top: "6%",  left: "8%",  duration: 5.5, delay: 0.0 },
    { src: "/hero_images/fastapi.svg",                            alt: "FastAPI", size: 66,  top: "8%",  left: "52%", duration: 4.6, delay: 0.9 },
    { src: "/hero_images/linux-logo-removebg-preview.png",        alt: "Linux",   size: 76,  top: "32%", left: "65%", duration: 6.2, delay: 1.3 },
    { src: "/hero_images/nestjs-logo-removebg-preview.png",       alt: "NestJS",  size: 100, top: "58%", left: "18%", duration: 7.0, delay: 0.5 },
    { src: "/hero_images/nextjs-removebg-preview.png",            alt: "Next.js", size: 76,  top: "22%", left: "28%", duration: 5.1, delay: 1.7 },
    { src: "/hero_images/spring-logo.png",                        alt: "Spring",  size: 70,  top: "66%", left: "56%", duration: 6.6, delay: 0.3 },
    { src: "/hero_images/Windows_Subsystem_for_Linux_logo.png",   alt: "WSL",     size: 62,  top: "72%", left: "2%",  duration: 4.9, delay: 1.1 },
    { src: "/hero_images/vim-logo-removebg-preview.png",          alt: "Vim",     size: 70,  top: "44%", left: "0%",  duration: 5.9, delay: 1.9 },
  ];

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

        {/* ── Two-column row: text left · floating icons right ── */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">

          {/* Left column: hero text */}
          <div className="flex-1 min-w-0">

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
            &ldquo;Live for coding, coffee, and late night builds.&rdquo;
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

          </div>{/* end left column */}

          {/* Right column: floating tech icons */}
          <div
            className="hidden lg:block relative flex-shrink-0"
            style={{ width: 460, height: 420 }}
            aria-hidden="true"
          >
            {floatingIcons.map(({ src, alt, size, top, left, duration, delay }) => (
              <motion.img
                key={src}
                src={src}
                alt={alt}
                className="absolute select-none"
                style={{ top, left, width: size, height: size, objectFit: "contain" }}
                animate={{ y: [0, -16, 0] }}
                transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>

        </div>{/* end two-column row */}

        {/* ── GitHub Contributions Calendar + Stats ── */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 pt-10 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <p
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--foreground-dim)" }}
            >
              github contributions
            </p>
            <a
              href="https://github.com/EranTimothy-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs transition-colors duration-150"
              style={{ color: "var(--foreground-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-dim)")}
            >
              <Github size={12} aria-hidden="true" />
              EranTimothy-dev
            </a>
          </div>

          {/* Calendar + stats side by side */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">

            {/* Calendar */}
            <div className="overflow-x-auto flex-1 min-w-0">
              <GitHubCalendar
                username="EranTimothy-dev"
                colorScheme="dark"
                theme={{
                  dark: [
                    "#161616",
                    "#14532d",
                    "#16a34a",
                    "#22c55e",
                    "#4ade80",
                  ],
                }}
                style={{ color: "var(--foreground-dim)" }}
                fontSize={11}
                blockSize={11}
                blockMargin={3}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>

            {/* Stats */}
            <div
              className="hidden lg:flex flex-row justify-center gap-8 pl-10 flex-shrink-0 border-l"
              style={{ borderColor: "var(--border)" }}
            >
              {[
                { label: "public repos", value: stats.repos },
                { label: "total stars", value: stats.stars },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="font-mono text-4xl font-medium tabular-nums"
                    style={{ color: "var(--foreground)" }}
                  >
                    {value === null ? (
                      <span
                        className="inline-block w-10 h-6 rounded animate-pulse"
                        style={{ backgroundColor: "var(--surface-raised)" }}
                      />
                    ) : (
                      value
                    )}
                  </span>
                  <span
                    className="font-mono text-s uppercase tracking-widest"
                    style={{ color: "var(--foreground-dim)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll hint — positioned relative to the full-height section */}
      <motion.div
          custom={6}
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
