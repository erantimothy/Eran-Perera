"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "Lua"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Spring Boot", "NestJS", "FastAPI"],
  },
  {
    label: "Infrastructure & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Git",
      "GitHub Actions",
      "Linux",
      "Cloudflare",
    ],
  },
  {
    label: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "AWS S3",
      "Cloudflare R2",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="px-6 py-24" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div ref={ref} className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
              06
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
              skills
            </span>
          </motion.div>

          <motion.h2
            id="skills-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light"
            style={{ color: "var(--foreground)" }}
          >
            The toolbox
          </motion.h2>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: gi * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <h3
                className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: "var(--foreground-dim)" }}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${group.label} skills`}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    role="listitem"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: gi * 0.08 + si * 0.04,
                      duration: 0.3,
                    }}
                    className="font-mono text-xs px-3 py-1.5 rounded border transition-all duration-150 cursor-default"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--foreground-muted)",
                      backgroundColor: "var(--surface)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-border)";
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.backgroundColor = "var(--accent-muted)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--foreground-muted)";
                      e.currentTarget.style.backgroundColor = "var(--surface)";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
