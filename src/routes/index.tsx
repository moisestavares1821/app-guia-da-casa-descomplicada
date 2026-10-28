import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import hero from "@/assets/hero.jpg";
import { initMetaPixel, trackInitiateCheckout } from "@/lib/meta-pixel";

const CHECKOUT = "https://pay.wiapy.com/Fi5MWoXDTg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia da Casa Descomplicada — 30 truques por R$10" },
      { name: "description", content: "Casa limpa, cheirosa e organizada sem gastar fortunas nem viver esfregando. 30 truques caseiros num app, por apenas R$10." },
      { property: "og:title", content: "Guia da Casa Descomplicada — por apenas R$10" },
      { property: "og:description", content: "30 truques caseiros, rotina de 7 dias e planner de 4 semanas no seu celular." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ label = "QUERO MINHA CASA DESCOMPLICADA" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <a href={CHECKOUT} onClick={trackInitiateCheckout} className="btn-cta text-center">
        {label} →
      </a>
      <p className="text-sm text-muted-foreground">Pagamento único de R$10 • Acesso imediato • Sem mensalidade</p>
    </div>
  );
}

const pains = [
  "Passa o fim de semana inteiro limpando e na segunda a casa já parece bagunçada de novo",
  "Gasta uma fortuna em produtos que prometem milagre e não entregam",
  "Esfrega panela queimada, box encardido e fogão engordurado até doer o braço",
  "Sente vergonha quando chega visita de surpresa",
  "Vai dormir cansada, com a sensação de que nunca dá conta de tudo",
];

const benefits = [
  ["🧽", "Limpeza que funciona", "Box, fogão, panela queimada, espelho e vaso — sem esfregar horas."],
  ["🌿", "Casa sempre cheirosa", "Toalhas, sofá e armários perfumados com o que você já tem em casa."],
  ["💰", "Economia de verdade", "Vinagre, limão e bicarbonato no lugar de produto caro de mercado."],
  ["📅", "Rotina de 7 dias", "Um pouquinho por dia e a casa fica em ordem sem maratona de faxina."],
  ["🗂️", "Planner de 4 semanas", "Você sabe exatamente o que fazer — sem esquecer nada."],
  ["✅", "Desafio de 30 dias", "Um truque por dia, marcando seu progresso. Simples e motivador."],
];

const steps = [
  ["1", "Compre por R$10", "Pagamento rápido e seguro."],
  ["2", "Abra o app no celular", "Instale na tela inicial, sem baixar nada pesado."],
  ["3", "Aplique um truque por dia", "Veja o que precisa, como fazer e marque como feito."],
];

const faqs = [
  ["É mensalidade?", "Não. Você paga R$10 uma única vez e o acesso é seu."],
  ["Preciso comprar produtos caros?", "Não. Os truques usam itens comuns: vinagre, limão, bicarbonato, álcool, arroz."],
  ["Funciona no meu celular?", "Sim. Abre em qualquer celular com internet e pode ser instalado na tela inicial."],
  ["Tenho pouco tempo, serve pra mim?", "Foi feito justamente pra isso: truques rápidos, um por dia, no seu ritmo."],
];

function Index() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <div className="bg-ink py-2 text-center text-sm font-semibold text-ink-foreground">
        🔥 Oferta especial de lançamento: de <s>R$47</s> por apenas R$10
      </div>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-secondary-foreground">
            Para quem cuida da casa e não aguenta mais se cansar
          </span>
          <h1 className="text-4xl leading-tight md:text-6xl">
            Sua casa <em className="text-primary">limpa, cheirosa e organizada</em> com metade do esforço
          </h1>
          <p className="text-lg text-muted-foreground">
            30 truques caseiros que todo mundo deveria saber — reunidos num app simples, com rotina pronta e planner semanal. Gaste menos, canse menos e tenha mais tempo pra você.
          </p>
          <Cta />
        </div>
        <img src={hero} alt="Mulher sorrindo em cozinha limpa segurando o celular" width={1200} height={1200} className="w-full rounded-2xl shadow-2xl" />
      </section>

      {/* DORES */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl md:text-4xl">Você se identifica com alguma dessas?</h2>
          <ul className="mt-8 space-y-3">
            {pains.map((p) => (
              <li key={p} className="flex gap-3 rounded-xl bg-card p-4 shadow-sm">
                <span className="text-destructive">✕</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt8 mt-8 text-center text-lg">
            O problema <strong>não é você</strong>. É que ninguém te ensinou os atalhos. Quem tem a casa sempre em ordem não trabalha mais — <strong className="text-primary">trabalha mais esperto</strong>.
          </p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-center font-bold uppercase tracking-widest text-primary">Apresentando</p>
        <h2 className="mt-2 text-center text-4xl md:text-5xl">Guia da Casa Descomplicada</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Seu complemento de organização doméstica no bolso. Cada truque mostra o que você vai precisar e o passo a passo — direto ao ponto.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([i, t, d]) => (
            <div key={t} className="rounded-2xl border bg-card p-6">
              <div className="text-3xl">{i}</div>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXEMPLO */}
      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Veja um truque de dentro do app</h2>
            <p className="mt-4 text-secondary-foreground">Simples assim. Nada de vídeo longo, nada de enrolação. Você lê em 30 segundos e aplica na hora.</p>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-xl">
            <p className="text-sm font-bold text-primary">02 • Limpeza Eficiente</p>
            <h3 className="mt-1 text-2xl">Panela queimada sem esfregar</h3>
            <p className="mt-4 text-sm font-bold">Você vai precisar</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Bicarbonato", "Vinagre", "Água"].map((x) => (
                <span key={x} className="rounded-full bg-accent px-3 py-1 text-sm">{x}</span>
              ))}
            </div>
            <p className="mt-4 text-sm font-bold">Como fazer</p>
            <p className="mt-1 text-muted-foreground">Cubra o fundo com bicarbonato, adicione vinagre e aqueça por 5 min. Depois de esfriar, a crosta solta fácil.</p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl md:text-4xl">Como funciona</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <div key={n} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">{n}</div>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-3xl md:text-5xl">Menos que um produto de limpeza</h2>
          <p className="mt-4 opacity-80">Um único desinfetante "milagroso" custa mais que isso. Aqui você leva tudo:</p>
          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left">
            {["30 truques caseiros testados", "Rotina de 7 dias pronta", "Planner de 4 semanas", "Desafio com acompanhamento de progresso", "Acesso no celular, quando quiser"].map((x) => (
              <li key={x}>✔ {x}</li>
            ))}
          </ul>
          <p className="mt-8 text-lg opacity-70"><s>De R$47</s></p>
          <p className="text-6xl font-extrabold">R$10</p>
          <p className="mb-8 opacity-80">pagamento único</p>
          <a href={CHECKOUT} onClick={trackInitiateCheckout} className="btn-cta">GARANTIR MEU ACESSO AGORA →</a>
          <p className="mt-4 text-sm opacity-70">🔒 Compra 100% segura • Acesso imediato</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center text-3xl md:text-4xl">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="rounded-xl border bg-card p-5">
              <summary className="cursor-pointer font-bold">{q}</summary>
              <p className="mt-2 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12">
          <Cta label="SIM, QUERO POR R$10" />
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Guia da Casa Descomplicada. Este site usa o Pixel da Meta para medir visitas e compras.
      </footer>
    </main>
  );
}
