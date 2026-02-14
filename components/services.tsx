"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Paginas Web",
    description:
      "Tu negocio visible las 24 horas. Creo tu pagina web profesional para que tus clientes te encuentren facilmente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h2" />
        <path d="M7 11h4" />
      </svg>
    ),
  },
  {
    title: "Automatizacion de procesos",
    description:
      "Deja de perder tiempo en tareas repetitivas. Automatizo tus procesos para que te enfoques en lo que importa.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Aplicaciones a medida",
    description:
      "Una solucion hecha a tu medida. Desarrollo la aplicacion que tu negocio necesita, exactamente como la necesitas.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 6h6" />
        <path d="M9 10h6" />
        <path d="M9 14h4" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Lo que puedo hacer por tu negocio
          </h2>
          <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
            Soluciones digitales pensadas para que tu negocio crezca sin
            complicaciones tecnologicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-card rounded-2xl border border-border p-8 transition-colors hover:border-border-accent"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-foreground-muted leading-relaxed">
                {service.description}
              </p>

              {/* Subtle glow on hover */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
                style={{ background: "var(--color-primary-glow)" }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
