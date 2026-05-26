import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar, BookOpen, Clock } from "lucide-react";
import { blogContent } from "../data/blogContent";
import { Blog } from "../types/portfolio";

interface BlogReaderProps {
  post: Blog;
  onBack: () => void;
}

export const BlogReader: React.FC<BlogReaderProps> = ({ post, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentText = blogContent[post.slug] || "Content is not available for this article.";

  // Custom premium markdown formatter
  const renderFormattedContent = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listItems: string[] = [];
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let codeLanguage = "";

    const flushList = (key: string) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-none flex flex-col gap-3 my-6 pl-4">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2.5 flex-shrink-0" />
                <span>{renderInlineFormatting(item)}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushCodeBlock = (key: string) => {
      if (codeLines.length > 0) {
        elements.push(
          <div key={`code-${key}`} className="my-6 relative rounded-2xl border border-zinc-800 bg-[#070707] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-2.5 bg-zinc-950 border-b border-zinc-800 text-[10px] sm:text-xs font-mono text-zinc-500 font-semibold tracking-widest uppercase">
              <span>{codeLanguage || "code"}</span>
              <span className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
              </span>
            </div>
            <pre className="p-5 overflow-x-auto text-xs sm:text-sm font-mono-custom text-zinc-300 leading-relaxed scrollbar-thin">
              <code>{codeLines.join("\n")}</code>
            </pre>
          </div>
        );
        codeLines = [];
        codeLanguage = "";
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Handle code block ```
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          inCodeBlock = false;
          flushCodeBlock(`cb-${i}`);
        } else {
          // Finish list if any
          if (inList) {
            inList = false;
            flushList(`fl-${i}`);
          }
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // Handle List Items
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        if (!inList) {
          inList = true;
        }
        listItems.push(line.trim().substring(2));
        continue;
      } else {
        if (inList) {
          inList = false;
          flushList(`fl-${i}`);
        }
      }

      // Handle Headings (H2 / H3)
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={`h2-${i}`}
            className="text-2xl sm:text-3xl font-extrabold text-white mt-12 mb-6 uppercase tracking-wide flex items-center gap-3 font-sans silver-heading"
          >
            {renderInlineFormatting(line.substring(3))}
          </h2>
        );
        continue;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={`h3-${i}`}
            className="text-xl sm:text-2xl font-bold text-zinc-200 mt-8 mb-4 tracking-wide font-sans border-l-2 border-pink-500 pl-3"
          >
            {renderInlineFormatting(line.substring(4))}
          </h3>
        );
        continue;
      }

      // Handle Blockquotes
      if (line.trim().startsWith("> ")) {
        elements.push(
          <blockquote
            key={`bq-${i}`}
            className="border-l-4 border-purple-500 bg-purple-500/5 rounded-r-2xl px-6 py-5 my-8 backdrop-blur-sm shadow-inner text-zinc-300 italic text-base sm:text-lg leading-relaxed font-light"
          >
            {renderInlineFormatting(line.trim().substring(2))}
          </blockquote>
        );
        continue;
      }

      // Handle Horizontal Rule
      if (line.trim() === "---") {
        elements.push(<hr key={`hr-${i}`} className="my-10 border-zinc-800/80" />);
        continue;
      }

      // Handle standard Paragraphs
      if (line.trim() !== "") {
        elements.push(
          <p
            key={`p-${i}`}
            className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light mb-6 text-justify"
          >
            {renderInlineFormatting(line)}
          </p>
        );
      }
    }

    // Flush any leftovers
    if (inList) flushList("end");
    if (inCodeBlock) flushCodeBlock("end");

    return elements;
  };

  // Render basic inline elements like **bold**, `code`, and [links](url)
  const renderInlineFormatting = (text: string) => {
    // Basic regex for inline markdown
    const parts: React.ReactNode[] = [];
    let currentText = text;
    let idx = 0;

    while (currentText.length > 0) {
      const boldMatch = currentText.match(/\*\*([^*]+)\*\*/);
      const codeMatch = currentText.match(/`([^`]+)`/);
      const linkMatch = currentText.match(/\[([^\]]+)\]\(([^)]+)\)/);

      const matches = [
        { type: "bold", index: boldMatch?.index ?? -1, length: boldMatch?.[0].length ?? 0, content: boldMatch?.[1] ?? "", full: boldMatch?.[0] ?? "" },
        { type: "code", index: codeMatch?.index ?? -1, length: codeMatch?.[0].length ?? 0, content: codeMatch?.[1] ?? "", full: codeMatch?.[0] ?? "" },
        { type: "link", index: linkMatch?.index ?? -1, length: linkMatch?.[0].length ?? 0, text: linkMatch?.[1] ?? "", url: linkMatch?.[2] ?? "", full: linkMatch?.[0] ?? "" },
      ].filter(m => m.index !== -1);

      if (matches.length === 0) {
        parts.push(currentText);
        break;
      }

      // Sort by earliest match
      matches.sort((a, b) => a.index - b.index);
      const earliest = matches[0];

      // Add leading text
      if (earliest.index > 0) {
        parts.push(currentText.substring(0, earliest.index));
      }

      // Add formatted element
      if (earliest.type === "bold") {
        parts.push(
          <strong key={`b-${idx}`} className="font-extrabold text-white">
            {earliest.content}
          </strong>
        );
      } else if (earliest.type === "code") {
        parts.push(
          <code key={`c-${idx}`} className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono-custom text-pink-400 text-sm font-semibold">
            {earliest.content}
          </code>
        );
      } else if (earliest.type === "link") {
        parts.push(
          <a
            key={`l-${idx}`}
            href={earliest.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 border-b border-pink-500/30 hover:border-pink-400 font-semibold transition-all"
          >
            {earliest.text}
          </a>
        );
      }

      currentText = currentText.substring(earliest.index + earliest.length);
      idx++;
    }

    return parts;
  };

  const getWordCount = (text: string) => {
    return text.split(/\s+/).filter(w => w.length > 0).length;
  };

  const getReadingTime = (text: string) => {
    const words = getWordCount(text);
    const time = Math.ceil(words / 200); // 200 words per minute
    return time;
  };

  return (
    <article className="relative w-full min-h-screen py-24 px-6 sm:px-12 max-w-4xl mx-auto z-10">
      {/* Sticky Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 z-50 transform origin-left" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      {/* Background neon elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none -z-10" />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-zinc-400 hover:text-white mb-12 py-2 px-4 rounded-full border border-zinc-900 hover:border-zinc-800 bg-[#121212]/30 hover:bg-[#121212] transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
        BACK TO BLOGS
      </button>

      {/* Header Info */}
      <header className="flex flex-col gap-6 mb-12">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-500 text-xs font-mono-custom uppercase font-semibold tracking-wider">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-zinc-600" />
            {post.date}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
          <span className="flex items-center gap-1.5">
            <BookOpen size={13} className="text-zinc-600" />
            Logs
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Clock size={13} className="text-pink-500/80" />
            {getReadingTime(contentText)} MIN READ
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-tight font-sans select-none">
          {post.title}
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full" />
      </header>

      {/* Post Content */}
      <section className="font-sans leading-relaxed select-text">
        {renderFormattedContent(contentText)}
      </section>

      {/* Bottom Back CTA */}
      <footer className="mt-16 pt-8 border-t border-zinc-900 flex justify-center">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-zinc-400 hover:text-white py-3.5 px-7 rounded-full border border-zinc-800 hover:border-zinc-700 bg-transparent hover:bg-zinc-900/30 transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
          RETURN TO POSTS
        </button>
      </footer>
    </article>
  );
};
