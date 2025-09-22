import React from "react";

// Default export a single component you can paste into a React + Tailwind project (Vite / CRA + Tailwind)
// This file contains:
// - CardNoticias (reusable)
// - SecaoDestaques (container)
// - Three style variants (Minimalista, Colorido, Jornal)
// - Small demo page with basic layout and responsive behavior

function LegoIcon({ size = 80 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <rect x="2" y="14" width="60" height="32" rx="4" fill="#2A6BFF" />
      <circle cx="16" cy="10" r="6" fill="#2A6BFF" />
      <circle cx="32" cy="10" r="6" fill="#2A6BFF" />
      <circle cx="48" cy="10" r="6" fill="#2A6BFF" />
    </svg>
  );
}

function CardNoticias({ titulo, resumo, variant = "minimal", children, href = "#" }) {
  // variant: minimal | color | journal
  const base = "rounded-lg shadow-sm overflow-hidden border";

  if (variant === "minimal") {
    return (
      <article className={`${base} bg-white p-6`}> 
        <div className="flex flex-col items-start gap-4">
          <div className="w-full flex items-center justify-center">
            <LegoIcon size={96} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">{titulo}</h3>
          <p className="text-gray-600">{resumo}</p>
          <a href={href} className="text-blue-600 font-medium">
            Leia mais
          </a>
        </div>
        {children}
      </article>
    );
  }

  if (variant === "color") {
    return (
      <article className={`${base} bg-white`}>
        <div className="h-40 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 p-4 flex items-end">
          <h3 className="text-white text-xl font-bold">{titulo}</h3>
        </div>
        <div className="p-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <LegoIcon size={64} />
            </div>
            <p className="text-gray-700 flex-1">{resumo}</p>
          </div>
          <div className="mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Leia mais</button>
          </div>
        </div>
      </article>
    );
  }

  // journal
  return (
    <article className={`${base} bg-gray-50 p-6`}> 
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900">{titulo}</h3>
          <p className="mt-3 text-gray-700">{resumo}</p>
          <a href={href} className="mt-4 inline-block text-gray-800 underline">
            Leia mais
          </a>
        </div>
        <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
          {/* monochrome icon */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="6" height="12" fill="#9CA3AF" />
            <rect x="10" y="10" width="4" height="8" fill="#9CA3AF" />
            <rect x="15" y="8" width="6" height="10" fill="#9CA3AF" />
          </svg>
        </div>
      </div>
    </article>
  );
}

const listaDeNoticias = [
  {
    id: 1,
    titulo: "React é como LEGO",
    resumo: "Componentes são como peças de LEGO, permitindo reuso e organização.",
  },
  {
    id: 2,
    titulo: "Organização no Código",
    resumo: "Um código bem organizado facilita a manutenção e evita bugs.",
  },
  {
    id: 3,
    titulo: "Design Consistente",
    resumo: "Separar UI em componentes melhora o trabalho em equipe e a consistência.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Componentes em React — Preview Interativo</h1>
          <p className="mt-2 text-gray-600">Cole este arquivo em um projeto React + Tailwind e comece a testar.</p>
        </header>

        {/* Originals section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Exemplos originais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {listaDeNoticias.slice(0, 3).map((n) => (
              <CardNoticias key={n.id} titulo={n.titulo} resumo={n.resumo} variant="minimal" />
            ))}
          </div>
        </section>

        {/* Variations section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Variações visuais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="mb-2 font-medium">Minimalista</h3>
              <CardNoticias titulo="React é como LEGO" resumo="Componentes são como peças de LEGO" variant="minimal" />
            </div>

            <div>
              <h3 className="mb-2 font-medium">Colorido</h3>
              <CardNoticias titulo="React é como LEGO" resumo="Combine blocos e construa UIs" variant="color" />
            </div>

            <div>
              <h3 className="mb-2 font-medium">Estilo Jornal</h3>
              <CardNoticias titulo="Organização no Código" resumo="Código organizado evita bugs" variant="journal" />
            </div>
          </div>
        </section>

        {/* Playground: props editing (simple) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Playground (exemplo)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <CardNoticias
                titulo="React é como LEGO — Playground"
                resumo="Altere props e veja como o mesmo componente se adapta a diferentes estilos."
                variant="minimal"
              />
            </div>
            <aside className="p-4 border rounded bg-white">
              <p className="text-sm text-gray-600">Dica: abra este arquivo em um editor e mude <code>variant</code> para <code>color</code> ou <code>journal</code> para ver as variações.</p>
            </aside>
          </div>
        </section>

        <footer className="text-center text-gray-500 mt-12">
          Feito com ❤️ — copie este componente para seu projeto e ajuste estilos conforme desejar.
        </footer>
      </div>
    </div>
  );
}