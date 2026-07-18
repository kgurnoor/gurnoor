import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Github, Linkedin } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";

type FormState = "idle" | "sending" | "success" | "error";

export const ContactSection: React.FC = () => {
  const { profile } = usePortfolio();
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputBase = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 bg-transparent";

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left: heading + info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span
            className="text-xs uppercase font-extrabold tracking-widest"
            style={{ color: 'var(--accent)' }}
          >
            07 / CONTACT
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight silver-heading"
          >
            LET'S
            <span className="block" style={{ color: 'var(--accent)' }}>CONNECT.</span>
          </h2>
          <p className="text-base leading-relaxed max-w-sm" style={{ color: 'var(--text-3)' }}>
            Open to fresher SDE & AI Engineer roles, collaborations, or just a good conversation about tech. Drop a message and I'll get back to you.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <a
              href={`mailto:${profile.social.email}`}
              className="flex items-center gap-3 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: 'var(--text-2)' }}
            >
              <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent)' }}>
                <Mail size={16} />
              </div>
              {profile.social.email}
            </a>
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: 'var(--text-2)' }}
              >
                <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent)' }}>
                  <Github size={16} />
                </div>
                github.com/kgurnoor
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: 'var(--text-2)' }}
              >
                <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent)' }}>
                  <Linkedin size={16} />
                </div>
                linkedin.com/in/gurnoor010105
              </a>
            )}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {formState === "success" ? (
            <div
              className="flex flex-col items-center justify-center gap-4 rounded-3xl border p-12 text-center"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <CheckCircle size={40} style={{ color: 'var(--accent)' }} />
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Message sent!</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>I'll get back to you as soon as I can.</p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-2 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all hover:scale-105"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--text-3)' }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border p-8"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    Name
                  </label>
                  <input
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputBase}
                    style={{
                      backgroundColor: 'var(--bg-card-deep)',
                      borderColor: 'var(--border-strong)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputBase}
                    style={{
                      backgroundColor: 'var(--bg-card-deep)',
                      borderColor: 'var(--border-strong)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className={inputBase + " resize-none"}
                  style={{
                    backgroundColor: 'var(--bg-card-deep)',
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              {formState === "error" && (
                <p className="text-xs font-semibold" style={{ color: '#f87171' }}>
                  Something went wrong. Try emailing directly at {profile.social.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                className="flex items-center justify-center gap-2 font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)' }}
              >
                <Send size={15} />
                {formState === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
