"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Radio, Users, FlaskConical } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    label: "Best Team Pitch Award",
    context: "Pitch60 2026",
    color: "var(--accent)",
    bg: "var(--accent-muted)",
    border: "var(--accent-border)",
  },
  {
    icon: Medal,
    label: "Finalist",
    context: "PitchPerfect 2.0 · 2025",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
  },
];

const activities = [
  { icon: Radio, label: "Secretary", context: "Radio Club · 2021" },
  { icon: Users, label: "Member", context: "ICT Society" },
  { icon: FlaskConical, label: "Member", context: "Association of Science and Technology" },
];

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="px-6 py-24" aria-labelledby="awards-heading">
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
              07
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
              awards & activities
            </span>
          </motion.div>

          <motion.h2
            id="awards-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light"
            style={{ color: "var(--foreground)" }}
          >
            Recognition
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Awards */}
          <div>
            <p
              className="font-mono text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--foreground-dim)" }}
            >
              awards
            </p>
            <div className="flex flex-col gap-3">
              {awards.map((award, i) => {
                const Icon = award.icon;
                return (
                  <motion.div
                    key={award.label + award.context}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="flex items-center gap-4 rounded-lg border p-4"
                    style={{
                      backgroundColor: award.bg,
                      borderColor: award.border,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--surface-raised)" }}
                      aria-hidden="true"
                    >
                      <Icon size={16} style={{ color: award.color }} />
                    </div>
                    <div>
                      <p
                        className="font-mono text-sm font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {award.label}
                      </p>
                      <p
                        className="font-mono text-xs mt-0.5"
                        style={{ color: "var(--foreground-dim)" }}
                      >
                        {award.context}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Activities */}
          <div>
            <p
              className="font-mono text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--foreground-dim)" }}
            >
              activities
            </p>
            <div className="flex flex-col gap-3">
              {activities.map((act, i) => {
                const Icon = act.icon;
                return (
                  <motion.div
                    key={act.label + act.context}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="flex items-center gap-4 rounded-lg border p-4"
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--surface-raised)" }}
                      aria-hidden="true"
                    >
                      <Icon size={16} style={{ color: "var(--foreground-dim)" }} />
                    </div>
                    <div>
                      <p
                        className="font-mono text-sm font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {act.label}
                      </p>
                      <p
                        className="font-mono text-xs mt-0.5"
                        style={{ color: "var(--foreground-dim)" }}
                      >
                        {act.context}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
