"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Star } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  note?: string;
}

const projects: Project[] = [
  {
    name: "CorpoVinculo",
    description:
      "Multi-tenant web platform for event organizers to manage industry outreach and sponsorships. Hybrid monolithic/microservice architecture. Contributed across backend, frontend, AI integration, CI/CD pipelines, deployment, and system design.",
    tech: [
      "NestJS",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Gemini AI",
      "Cloudflare R2",
      "Cloudflare Workers",
      "TanStack Query",
      "Redux",
    ],
    github: "https://github.com/CorpoVinculo",
    live: "https://corpovinculo.com",
    featured: true,
  },
  {
    name: "YouTube Video & Audio Downloader",
    description:
      "Python application for downloading YouTube video and audio with flexible quality options. Includes REST APIs and WebSocket support for asynchronous download handling.",
    tech: ["FastAPI", "FFmpeg", "yt-dlp", "WebSockets", "Python"],
    github: "https://github.com/EranTimothy-dev/YT_VAD-Backend",
  },
  {
    name: "Summer Internship Platform",
    description:
      "Full-stack web platform built for the Rizing summer internship program. Contributed to backend development, CI/CD pipeline setup, and cloud deployment.",
    tech: [
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "AWS DynamoDB",
      "Cloudflare R2",
      "Azure Container Registry",
      "Azure Container Apps",
    ],
    github: "https://github.com/summer-internship-concept",
  },
  {
    name: "ShiftSL",
    description:
      "Invited contributor. Focused on writing comprehensive test suites and refactoring existing codebase for maintainability and reliability.",
    tech: ["Spring Boot", "JUnit", "Mockito", "Java"],
    github: "https://github.com/ShiftSL",
    note: "invited contributor",
  },
  {
    name: "Lottery Management System",
    description:
      "Full-stack lottery management system for CPN & Sons Pvt Ltd to manage stocks and vendor distribution.",
    tech: ["Spring Boot", "Next.js", "Supabase", "Spring Security"],
    github: "https://github.com/Lottery-Project",
    note: "ongoing project",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`group relative flex flex-col rounded-lg border p-6 transition-all duration-200 cursor-default ${
        project.featured ? "lg:col-span-2" : ""
      }`}
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-border)";
        e.currentTarget.style.backgroundColor = "var(--surface-raised)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.backgroundColor = "var(--surface)";
      }}
      aria-label={`Project: ${project.name}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3
            className="font-mono text-sm font-medium"
            style={{ color: "var(--foreground)" }}
          >
            {project.name}
          </h3>
          {project.featured && (
            <span
              className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded-full border"
              style={{
                borderColor: "var(--accent-border)",
                color: "var(--accent)",
                backgroundColor: "var(--accent-muted)",
              }}
            >
              <Star size={10} aria-hidden="true" />
              featured
            </span>
          )}
          {project.note && (
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-full border"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground-dim)",
              }}
            >
              {project.note}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded transition-colors duration-150"
              style={{ color: "var(--foreground-dim)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--foreground-dim)")
              }
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github size={15} aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded transition-colors duration-150"
              style={{ color: "var(--foreground-dim)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--foreground-dim)")
              }
              aria-label={`Visit ${project.name} live site`}
            >
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{
          color: "var(--foreground-muted)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-0.5 rounded border"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground-dim)",
              backgroundColor: "var(--border-subtle)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="px-6 py-24" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div ref={ref} className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span
              className="font-mono text-xs"
              style={{ color: "var(--accent)" }}
            >
              01
            </span>
            <div
              className="h-px flex-1 max-w-12"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden="true"
            />
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--foreground-dim)" }}
            >
              projects
            </span>
          </motion.div>

          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light"
            style={{ color: "var(--foreground)" }}
          >
            Things I&apos;ve built
          </motion.h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 font-mono text-sm text-center"
          style={{ color: "var(--foreground-dim)" }}
        >
          and there&apos;s more where that came from —{" "}
          <a
            href="https://github.com/EranTimothy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={{ color: "var(--accent)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            explore the rest on GitHub ↗
          </a>
        </motion.p>
      </div>
    </section>
  );
}
