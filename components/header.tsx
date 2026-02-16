"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por que yo" },
  { href: "#contacto", label: "Contacto" },
];
export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background-elevated/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold text-foreground tracking-tight cursor-pointer"
        >
          Dani<span className="text-primary">Dev</span>
        </button>

        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-foreground-muted hover:text-foreground px-3 py-2 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/34652308033"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm font-medium bg-whatsapp hover:bg-whatsapp-hover text-background px-4 py-2 rounded-lg transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile: just WhatsApp button */}
        <a
          href="https://wa.me/34652308033"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden text-sm font-medium bg-whatsapp hover:bg-whatsapp-hover text-background px-4 py-2 rounded-lg transition-colors"
        >
          WhatsApp
        </a>
      </nav>
    </motion.header>
  );
}
