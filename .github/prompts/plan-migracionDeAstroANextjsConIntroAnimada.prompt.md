## Plan: Migración de Astro a Next.js con Intro Animada

Migrar el portafolio de Astro a Next.js, eliminando la configuración y componentes de Astro, creando la estructura Next.js App Router, y desarrollando una nueva experiencia de usuario con una animación de intro tipo "circuit board". El enfoque será mobile-first y orientado a negocios, conservando los assets relevantes y asegurando una transición limpia de estilos y dependencias.

## Paleta de Colores (post-intro)

Background: Gradiente oscuro #0f172a a #020617 (slate-900 a slate-950)
Primario/Acentos: Cyan #06b6d4 a #22d3ee
Texto principal: #f1f5f9 (slate-100)
Texto secundario: #94a3b8 (slate-400)
Bordes/Sutilezas: #1e293b (slate-800)
Cards: #0f172a con borde sutil cyan

## Tipografia

Headings: Inter o Plus Jakarta Sans (bold, moderna)
Body: Inter (limpia, legible)

**Steps**
1. Eliminar archivos y carpetas de Astro:
   - astro.config.mjs
   - src/pages/
   - src/layouts/
   - src/components/
   - src/styles/global.css
   - tailwind.config.js (reemplazar por tailwind.config.ts)
2. Crear estructura Next.js App Router:
   - app/layout.tsx (layout principal, metadatos, fuentes, import de globals.css)
   - app/page.tsx (página principal, importa todos los componentes)
   - app/globals.css (tema nuevo, variables CSS semánticas)
3. Crear componentes React en components/:
   - components/circuit-intro.tsx (animación de intro)
   - components/header.tsx (header sticky)
   - components/hero.tsx (hero section)
   - components/services.tsx (servicios)
   - components/why-me.tsx (propuesta de valor)
   - components/contact.tsx (contacto + footer)
4. Actualizar configuración y dependencias:
   - package.json: eliminar Astro, agregar Next.js, React, Framer Motion, Tailwind, TypeScript y tipos.
   - tailwind.config.ts: actualizar paths y tema para Next.js.
   - next.config.mjs: configuración Next.js.
   - tsconfig.json: asegurar compatibilidad Next.js/React.
5. Conservar y revisar assets en public/:
   - daniel-portfolio.jpeg, whatsapp.svg, linkedin.svg, gmail.svg, github_dark.svg, favicon.svg.
6. Implementar animación de intro:
   - SVG inline, animaciones CSS y Framer Motion, control de visibilidad con localStorage, botón "Saltar intro".
7. Rediseñar el sitio principal:
   - Mobile-first, paleta y tipografía especificadas, estructura de secciones y componentes según el resumen.
8. Verificar y migrar estilos globales y utilidades personalizadas de Tailwind/global.css.
9. Actualizar scripts de package.json para Next.js (dev, build, start).

**Verification**
- Correr `npm run dev` y verificar que la app Next.js funcione correctamente.
- Confirmar que la animación de intro aparece solo la primera vez (o por sesión).
- Revisar responsividad y visual en móvil (375px) y desktop.
- Validar que todos los assets y links funcionan.
- Revisar que los estilos y la paleta de colores coincidan con el diseño propuesto.
- Probar el botón "Saltar intro" y la transición de la animación.
- Verificar que los componentes y secciones cumplen con el enfoque de negocio.

**Decisions**
- Se elimina todo el código Astro y se reescribe en React/Next.js.
- Se prioriza mobile-first y experiencia de usuario moderna.
- Se usa Framer Motion y CSS para animaciones, sin dependencias pesadas.
- Se conserva la estructura de assets en public/.

## Mobile first
Dado que el acceso principal es via QR (movil):

Todos los componentes se disenan primero para 375px
Breakpoints: sm(640), md(768), lg(1024)
Botones de WhatsApp con tamano tactil adecuado (min 48px)
Servicios en stack vertical en movil, grid en desktop
La animacion de intro se adapta al viewport movil
Font sizes: base 16px, headings escalan con clamp()

