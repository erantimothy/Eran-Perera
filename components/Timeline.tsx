"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItem {
  type: "experience" | "education" | "certification";
  title: string;
  subtitle: string;
  period?: string;
  details?: string[];
  badge?: string;
  tags?: string[];
}

const timelineData: TimelineItem[] = [
  // Experience
  {
    type: "experience",
    title: "Summer Intern",
    subtitle: "Rizing Consumer Industries",
    period: "July 2025 – August 2025",
    details: [
      "Gained exposure to SAP ERP fundamentals and their applications in the fashion industry.",
      "Presented learnings and recommendations to senior mentors.",
      "Collaborated cross-functionally on a CSR project spanning IT, business, and hospitality sectors.",
    ],
  },
  // Education
  {
    type: "education",
    title: "BSc Software Engineering",
    subtitle: "University of Westminster · via Informatics Institute of Technology",
    period: "Ongoing",
    badge: "in progress",
  },
  {
    type: "education",
    title: "Foundation Certificate in Higher Education",
    subtitle: "Informatics Institute of Technology",
    period: "Completed",
    badge: "distinction",
  },
  {
    type: "education",
    title: "G.C.E. Ordinary Level",
    subtitle: "S. Thomas' College, Mount Lavinia",
    period: "Completed",
  },
  // Certifications
  {
    type: "certification",
    title: "Java & OOP Certification",
    subtitle: "STEM Link",
    tags: ["Java", "OOP"],
  },
  {
    type: "certification",
    title: "Docker Foundations Professional Certificate",
    subtitle: "LinkedIn Learning · accredited by Docker, Inc.",
    tags: ["Docker", "Containers"],
  },
  {
    type: "certification",
    title: "Azure AI Fundamentals (AI-900)",
    subtitle: "Microsoft",
    tags: ["Azure", "AI/ML"],
  },
  {
    type: "certification",
    title: "Atlassian Agile Project Management Professional",
    subtitle: "LinkedIn Learning",
    tags: ["Agile", "Scrum"],
  },
  {
    type: "certification",
    title: "Python for Beginners",
    subtitle: "University of Moratuwa",
    tags: ["Python"],
  },
  {
    type: "certification",
    title: "Web Design for Beginners",
    subtitle: "University of Moratuwa",
    tags: ["HTML", "CSS"],
  },
];

const typeIcons = {
  experience: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const typeColors = {
  experience: "var(--accent)",
  education: "#06b6d4",
  certification: "#a78bfa",
};

const badgeColors: Record<string, { bg: string; text: string; border: string }> = {
  "in progress": {
    bg: "rgba(245,158,11,0.08)",
    text: "var(--accent)",
    border: "var(--accent-border)",
  },
  distinction: {
    bg: "rgba(34,197,94,0.08)",
    text: "#22c55e",
    border: "rgba(34,197,94,0.25)",
  },
};

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = typeIcons[item.type];
  const color = typeColors[item.type];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative flex gap-6"
    >
      {/* Timeline dot & icon */}
      <div className="relative flex flex-col items-center">
        <div
          className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full border-2 shrink-0"
          style={{
            backgroundColor: "var(--background)",
            borderColor: color,
          }}
          aria-hidden="true"
        >
          <Icon size={14} style={{ color }} />
        </div>
      </div>

      {/* Card */}
      <div
        className="flex-1 rounded-lg border p-5 mb-4 transition-all duration-200"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        {/* Title row */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3
            className="font-mono text-sm font-medium"
            style={{ color: "var(--foreground)" }}
          >
            {item.title}
          </h3>
          <div className="flex items-center gap-2">
            {item.badge && badgeColors[item.badge] && (
              <span
                className="font-mono text-xs px-2 py-0.5 rounded-full border"
                style={{
                  backgroundColor: badgeColors[item.badge].bg,
                  color: badgeColors[item.badge].text,
                  borderColor: badgeColors[item.badge].border,
                }}
              >
                {item.badge}
              </span>
            )}
            {item.period && (
              <span
                className="font-mono text-xs"
                style={{ color: "var(--foreground-dim)" }}
              >
                {item.period}
              </span>
            )}
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="text-sm mb-3"
          style={{
            color: "var(--foreground-muted)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {item.subtitle}
        </p>

        {/* Details */}
        {item.details && (
          <ul className="flex flex-col gap-1.5 mb-3">
            {item.details.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm"
                style={{
                  color: "var(--foreground-muted)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <span
                  className="mt-2 shrink-0 w-1 h-1 rounded-full"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
                {d}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {item.tags && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
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
        )}
      </div>
    </motion.div>
  );
}

function TimelineGroup({
  type,
  label,
  sectionNum,
  id,
}: {
  type: TimelineItem["type"];
  label: string;
  sectionNum: string;
  id: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const items = timelineData.filter((d) => d.type === type);
  const color = typeColors[type];

  return (
    <section id={id} className="px-6 py-20" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div ref={ref} className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
              {sectionNum}
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
              {label}
            </span>
          </motion.div>

          <motion.h2
            id={`${id}-heading`}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light"
            style={{ color: "var(--foreground)" }}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[17px] top-4 bottom-4 w-px"
            style={{
              background: `linear-gradient(to bottom, ${color}, transparent)`,
              opacity: 0.3,
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col">
            {items.map((item, i) => (
              <TimelineNode key={`${item.title}-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Timeline() {
  return (
    <>
      <TimelineGroup
        type="experience"
        label="experience"
        sectionNum="03"
        id="experience"
      />
      <TimelineGroup
        type="education"
        label="education"
        sectionNum="04"
        id="education"
      />
      <TimelineGroup
        type="certification"
        label="certifications"
        sectionNum="05"
        id="certifications"
      />
    </>
  );
}
