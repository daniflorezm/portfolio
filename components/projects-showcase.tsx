"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Businext",
    description:
      "Aplicación de reservas para negocios, permitiendo a los dueños de los mismos gestionar citas y servicios de forma eficiente.",
    url: "https://businext.greenfourtech.com/",
    image: "/businext.png",
  },
  {
    title: "Barber Logua",
    description:
      "Página web para la marca personal Logua, mostrando servicios, portafolio y contacto de manera profesional.",
    url: "https://loguaweb.vercel.app/barberlogua",
    image: "/barberlogua.png",
  },
];



export default function ProjectsShowcase() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar el correo");
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setError("");
    setShowForm(false);
  };

  return (
    <section
      className="py-20 relative bg-background/90 border-t border-border"
      style={{ background: "var(--color-background, #020617)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          Ejemplos de proyectos realizados
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-start border border-border hover:shadow-2xl transition-shadow relative overflow-hidden min-h-[370px]"
              style={{ background: "var(--color-card, #0f172a)", color: "var(--color-foreground, #f1f5f9)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="w-full aspect-[16/9] rounded-xl mb-4 flex items-center justify-center overflow-hidden bg-background-elevated border border-border"
                style={{ background: "var(--color-background-elevated, #0f172a)" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={270}
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
              <p className="mb-4 text-foreground-muted min-h-[48px]">{project.description}</p>
              <div className="flex-1" />
              <div className="w-full flex justify-end">
                <Link
                  href={project.url}
                  target="_blank"
                  className="text-primary font-semibold hover:underline mt-auto"
                  style={{ color: "var(--color-primary, #06b6d4)" }}
                >
                  Ver proyecto
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex flex-col items-center gap-4 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {!showForm && !submitted && (
            <button
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary-light transition"
              style={{ background: "var(--color-primary, #06b6d4)" }}
              onClick={() => setShowForm(true)}
            >
              ¡Quiero que mi proyecto sea el siguiente!
            </button>
          )}
          {showForm && !submitted && (
            <form
              className="flex flex-col md:flex-row items-center gap-3 w-full max-w-md"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                className="px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground flex-1"
                style={{ background: "var(--color-background, #020617)", color: "var(--color-foreground, #f1f5f9)" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-light transition"
                style={{ background: "var(--color-primary, #06b6d4)" }}
                disabled={loading}
              >
                {loading ? "Enviando..." : "Me interesa"}
              </button>
              {error && (
                <span className="text-red-500 text-sm mt-2 w-full block text-center">{error}</span>
              )}
            </form>
          )}
          {submitted && (
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="text-green-500 font-semibold text-lg text-center bg-background border border-green-700 rounded-lg px-4 py-2 max-w-md w-full">
                ¡Gracias! Me pondré en contacto contigo pronto.
              </div>
              <button
                className="text-primary underline text-sm mt-1"
                style={{ color: "var(--color-primary, #06b6d4)" }}
                onClick={handleReset}
              >
                Enviar otro correo
              </button>
            </div>
          )}
        </motion.div>
      </div>
      {/* Animación sutil de "el siguiente eres tú" */}
      <motion.div
        className="w-full flex justify-center mt-8 md:mt-12"
        style={{ minHeight: 40 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0.5, 1], y: [20, 0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <span
          className="text-xl md:text-2xl font-bold select-none pointer-events-none text-primary/70 text-center"
          style={{ color: "var(--color-primary, #06b6d4)", opacity: 0.7 }}
        >
          El siguiente proyecto puede ser el tuyo
        </span>
      </motion.div>
    </section>
  );
}
