"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputBase: React.CSSProperties = {
    backgroundColor: "var(--surface)",
    borderColor: "var(--border)",
    color: "var(--foreground)",
    fontFamily: "var(--font-mono)",
    fontSize: "13px",
    outline: "none",
    width: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "6px",
    padding: "10px 14px",
    transition: "border-color 150ms",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--accent-border)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--border)";
  };

  return (
    <section
      id="contact"
      className="px-6 py-24"
      aria-labelledby="contact-heading"
    >
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
              08
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
              contact
            </span>
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-light mb-3"
            style={{ color: "var(--foreground)" }}
          >
            Get in touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm leading-relaxed max-w-md"
            style={{
              color: "var(--foreground-muted)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Have a project in mind, a question, or just want to say hello?
            Drop a message and I&apos;ll get back to you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-start gap-4 rounded-lg border p-8"
                style={{
                  backgroundColor: "rgba(34,197,94,0.06)",
                  borderColor: "rgba(34,197,94,0.2)",
                }}
                role="alert"
              >
                <CheckCircle
                  size={28}
                  style={{ color: "#22c55e" }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="font-mono text-sm font-medium mb-1"
                    style={{ color: "#22c55e" }}
                  >
                    Message sent.
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--foreground-muted)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Thanks for reaching out — I&apos;ll reply to your email
                    shortly.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs mt-2 transition-colors duration-150"
                  style={{ color: "var(--foreground-dim)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--foreground)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--foreground-dim)")
                  }
                >
                  send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs mb-2"
                      style={{ color: "var(--foreground-dim)" }}
                    >
                      name <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputBase}
                      aria-required="true"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs mb-2"
                      style={{ color: "var(--foreground-dim)" }}
                    >
                      email <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputBase}
                      aria-required="true"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs mb-2"
                      style={{ color: "var(--foreground-dim)" }}
                    >
                      message <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="what's on your mind..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={{ ...inputBase, resize: "vertical" }}
                      aria-required="true"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div
                      className="flex items-center gap-2 text-sm font-mono"
                      style={{ color: "#f87171" }}
                      role="alert"
                    >
                      <AlertCircle size={14} aria-hidden="true" />
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded font-mono text-sm font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "#0a0a0a",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading")
                        e.currentTarget.style.backgroundColor =
                          "var(--accent-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--accent)";
                    }}
                    aria-label="Send message"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2
                          size={14}
                          className="animate-spin"
                          aria-hidden="true"
                        />
                        sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} aria-hidden="true" />
                        send message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {[
              { label: "email", value: "erantimothy@gmail.com", href: "mailto:erantimothy@gmail.com" },
              { label: "linkedin", value: "linkedin.com/in/erantimothy", href: "https://linkedin.com/in/erantimothy" },
              { label: "github", value: "github.com/EranTimothy-dev", href: "https://github.com/EranTimothy-dev" },
              { label: "location", value: "Colombo, Sri Lanka", href: undefined },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-1"
                  style={{ color: "var(--foreground-dim)" }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-mono text-sm transition-colors duration-150"
                    style={{ color: "var(--foreground-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--foreground-muted)")
                    }
                    aria-label={`${label}: ${value}`}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className="font-mono text-sm"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {value}
                  </p>
                )}
              </div>
            ))}

            {/* Response note */}
            {/* <div
              className="mt-4 rounded-lg border p-4"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="font-mono text-xs leading-relaxed"
                style={{ color: "var(--foreground-dim)" }}
              >
                <span style={{ color: "var(--accent)" }}>$ </span>
                typically responds within 24–48 hours
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
