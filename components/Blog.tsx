"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface BlogPost {
  title: string;
  summary: string;
  platform: "Medium" | "Notion";
  href: string;
}

const posts: BlogPost[] = [
  {
    title: "Managing Custom and Self-Signed SSL/TLS Certs in MSYS2 UCRT64",
    summary:
      "A practical guide to trusting custom certificate authorities in the MSYS2 UCRT64 environment for local dev workflows.",
    platform: "Medium",
    href: "https://medium.com/@eran.perera2010/managing-custom-and-self-signed-ssl-tls-certs-in-msys2-ucrt64-8220a7ab8794",
  },
  {
    title: "Design Patterns in Java",
    summary:
      "An exploration of classic GoF patterns — creational, structural, and behavioral — with practical Java examples.",
    platform: "Medium",
    href: "https://medium.com/@eran.perera2010/design-patterns-in-java-b38338b9d32a",
  },
  {
    title: "Prompt Compression and Query Optimization",
    summary:
      "Techniques for reducing token usage in LLM prompts while preserving semantic integrity and output quality.",
    platform: "Notion",
    href: "https://erantimothyblogs.notion.site/Prompt-Compression-and-Query-Optimization-1e728ea35fa280bda3ecec58a310e2e4",
  },
  {
    title: "Software Testing in Java with JUnit",
    summary:
      "Comprehensive walkthrough of unit testing fundamentals in Java — assertions, test lifecycle, mocking, and best practices.",
    platform: "Notion",
    href: "https://erantimothyblogs.notion.site/Software-Testing-in-Java-with-JUnit-18228ea35fa2805bba71f21a0b93b7b7",
  },
  {
    title: "Introduction to Agile",
    summary:
      "Core Agile principles, Scrum ceremonies, sprint planning, and how iterative delivery improves software teams.",
    platform: "Notion",
    href: "https://medium.com/@eran.perera2010/introduction-to-agile-99e5e1f38b01",
  },
];

const platformStyles: Record<BlogPost["platform"], { bg: string; text: string; border: string }> = {
  Medium: {
    bg: "rgba(255,255,255,0.04)",
    text: "#d4d4d4",
    border: "#2a2a2a",
  },
  Notion: {
    bg: "rgba(99,102,241,0.08)",
    text: "#a5b4fc",
    border: "rgba(99,102,241,0.2)",
  },
};

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="px-6 py-24" aria-labelledby="blog-heading">
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
              02
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
              writing
            </span>
          </motion.div>

          <motion.h2
            id="blog-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light"
            style={{ color: "var(--foreground)" }}
          >
            Words on the wire
          </motion.h2>
        </div>

        {/* Posts list */}
        <div className="flex flex-col gap-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg border p-5 transition-all duration-200"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent-border)";
                  el.style.backgroundColor = "var(--surface-raised)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.backgroundColor = "var(--surface)";
                }}
                aria-label={`Read: ${post.title} on ${post.platform}`}
              >
                <BookOpen
                  size={16}
                  className="shrink-0 mt-0.5 sm:mt-0"
                  style={{ color: "var(--foreground-dim)" }}
                  aria-hidden="true"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3
                      className="font-mono text-sm font-medium group-hover:text-white transition-colors duration-150"
                      style={{ color: "var(--foreground)" }}
                    >
                      {post.title}
                    </h3>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded border shrink-0"
                      style={{
                        backgroundColor: platformStyles[post.platform].bg,
                        color: platformStyles[post.platform].text,
                        borderColor: platformStyles[post.platform].border,
                      }}
                    >
                      {post.platform}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--foreground-dim)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {post.summary}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--foreground-dim)" }}
                  aria-hidden="true"
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
