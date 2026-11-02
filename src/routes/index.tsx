import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroAsset from "@/assets/antes-depois.webp.asset.json";
const hero = heroAsset.url;
import { Button } from "@/components/ui/button";
import { initMetaPixel, trackInitiateCheckout } from "@/lib/meta-pixel";

const CHECKOUT = "https://pay.wiapy.com/Fi5MWoXDTg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia da Casa Descomplicada — Sua casa em ordem. 3 tarefas por dia." },
      { name: "description", content: "A rotina da semana já vem pronta no seu celular. Abra o app, faça as 3 tarefas do dia e marque. Com 30 truques caseiros para limpar e perfumar gastando menos." },
      { property: "og:title", content: "Guia da Casa Descomplicada — Sua casa em ordem. 3 tarefas por dia." },
      { property: "og:description", content: "A rotina da semana já vem pronta no seu celular. Abra o app, faça as 3 tarefas do dia e marque. Com 30 truques caseiros para limpar e perfumar gastando menos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Button asChild className="btn-cta h-auto w-full max-w-lg whitespace-normal px-5 text-center text-base sm:text-lg">
        <a href={CHECKOUT} onClick={trackInitiateCheckout}>{label}</a>
      </Button>
      <p className="text-center text-sm opacity-80">{note}</p>
    </div>
  );
}

const pains = [
  "Olha pra casa e não sabe por onde começar",
  "Gasta caro em produto que não resolve",
  "Dorme cansada sem a sensação de ter dado conta",
];

const benefits = [
  ["📅", "Rotina de 7 dias pronta", "Você nunca mais acorda sem saber o que fazer."],
  ["✅", "3 tarefas por dia", "Zona, fluxo e reset: cerca de 20 minutos por dia. Dia puxado? Faça só o Reset de 5 minutos."],
  ["🗂️", "Seu mês em 4 semanas", "Veja quanto você concluiu em cada semana e acompanhe sua sequência."],
  ["🧽", "30 truques passo a passo", "Box, fogão, panela e espelho com soluções simples."],
  ["🎯", "Sequência, progresso e conquistas", "Você marca, vê o progresso e quer continuar."],
];

const steps = [
  ["1", "Compre por R$10", "Pagamento rápido e seguro."],
  ["2", "Abra o app no celular", "Instala na tela inicial em poucos toques."],
  ["3", "Siga o dia", "Faça as 3 tarefas e marque."],
];

const objections = [
  ['"Dica de limpeza eu acho de graça na internet."', "Acha, soltas, e perde tempo escolhendo. Aqui você tem a ordem pronta: o que fazer, em que dia, em quanto tempo."],
  ['"Eu não tenho tempo."', "São cerca de 20 minutos por dia. E nos dias corridos, faça só o Reset de 5 minutos e o seu dia conta."],
  ['"Eu não sou organizada."', "Perfeito. O app foi feito pra isso: todo dia ele mostra o que fazer, e você só marca."],
];

const faqs = [
  ["É mensalidade?", "Não. Pagamento único de R$ 10."],
  ["Preciso comprar produtos caros?", "Não. A maioria dos truques usa vinagre, limão, bicarbonato e itens comuns de casa."],
  ["Funciona no meu celular?", "Funciona em iPhone e Android, direto pelo navegador."],
  ["Tenho pouco tempo, serve pra mim?", "Serve. São cerca de 20 minutos por dia, e nos dias corridos você pode fazer só o Reset de 5 minutos."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia e recebe 100% de volta."],
  ["Como recebo o acesso?", "Logo após o pagamento, você recebe o acesso para abrir o app no celular."],
  ["Meu progresso fica salvo?", "Fica salvo no aparelho e no navegador em que você usa o app."],
];

function Index() {
  useEffect(() => { initMetaPixel(); }, []);

  return (
    <main className="overflow-x-hidden">
      <div className="bg-ink px-5 py-3 text-center text-sm font-semibold text-ink-foreground">
        🔥 Oferta de lançamento: R$10,00 até meia noite. Depois, R$37,00
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-secondary-foreground">Para quem não sabe por onde começar na casa</span>
          <h1 className="text-4xl leading-tight md:text-6xl">Sua casa em ordem. 3 tarefas por dia.</h1>
          <p className="text-lg text-muted-foreground">A rotina da semana já vem pronta no seu celular. Abra o app, faça as 3 tarefas do dia e marque. Com 30 truques caseiros para limpar e perfumar gastando menos.</p>
        </div>
        <img src={hero} alt="Antes e depois da casa com a rotina leve" width={1200} height={1200} className="w-full rounded-2xl shadow-2xl" />
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl md:text-4xl">Você se identifica com alguma dessas?</h2>
          <ul className="mt-8 space-y-3">
            {pains.map((p) => <li key={p} className="flex gap-3 rounded-lg bg-card p-4 shadow-sm"><span className="text-destructive">✕</span><span>{p}</span></li>)}
          </ul>
          <p className="mt-8 text-center text-lg font-bold text-primary">A culpa não é sua. Faltava uma rotina pronta.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-center font-bold text-primary">Apresentando</p>
        <h2 className="mt-2 text-center text-4xl md:text-5xl">Guia da Casa Descomplicada</h2>
        <div className="mx-auto mt-4 max-w-2xl space-y-4 text-center text-lg text-muted-foreground">
          <p>O app tira a decisão da sua cabeça: cada dia da semana já tem suas 3 tarefas. Você abre, faz e marca.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([i, t, d]) => <div key={t} className="rounded-lg border bg-card p-6"><h3 className="text-2xl">{i} {t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="text-3xl md:text-4xl">Veja o app por dentro</h2>
        <p className="mt-2 text-lg text-muted-foreground">É assim que você usa todo dia.</p>
        <div className="relative mx-auto mt-10 w-full max-w-[360px] p-5">
          {/* halo de luz atrás do aparelho */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[118%] w-[155%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.22), transparent)" }} />
          {/* sombra de contato no chão */}
          <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-9 w-[70%] -translate-x-1/2 rounded-[50%] blur-xl" style={{ background: "rgba(9,20,45,0.45)" }} />

          {/* corpo: borda de titânio escovado */}
          <div
            className="relative rounded-[56px]"
            style={{
              padding: "7px",
              background: "linear-gradient(148deg, #ffffff 0%, #dfe6f0 9%, #8f9cb2 24%, #3d4a60 42%, #171f2c 55%, #3f4c62 68%, #a9b6c9 84%, #f6f9fd 100%)",
              boxShadow: "0 45px 80px -30px rgba(9,20,45,0.60), 0 16px 30px -16px rgba(9,20,45,0.50), inset 0 1px 1px rgba(255,255,255,0.55), inset 0 -1px 1px rgba(255,255,255,0.35)",
            }}
          >
            {/* botão de ação + volume (esquerda) */}
            <div aria-hidden className="pointer-events-none absolute -left-[8px] top-[86px] h-7 w-[7px] rounded-l-[4px]" style={{ background: "linear-gradient(to right, #eef2f8 0%, #b3c0d2 22%, #5b6779 62%, #232c3a 100%)", boxShadow: "-2px 2px 4px rgba(9,20,45,0.25)" }} />
            <div aria-hidden className="pointer-events-none absolute -left-[8px] top-[132px] h-12 w-[7px] rounded-l-[4px]" style={{ background: "linear-gradient(to right, #eef2f8 0%, #b3c0d2 22%, #5b6779 62%, #232c3a 100%)", boxShadow: "-2px 2px 4px rgba(9,20,45,0.25)" }} />
            <div aria-hidden className="pointer-events-none absolute -left-[8px] top-[190px] h-12 w-[7px] rounded-l-[4px]" style={{ background: "linear-gradient(to right, #eef2f8 0%, #b3c0d2 22%, #5b6779 62%, #232c3a 100%)", boxShadow: "-2px 2px 4px rgba(9,20,45,0.25)" }} />
            {/* liga/desliga (direita) */}
            <div aria-hidden className="pointer-events-none absolute -right-[8px] top-[154px] h-16 w-[7px] rounded-r-[4px]" style={{ background: "linear-gradient(to left, #eef2f8 0%, #b3c0d2 22%, #5b6779 62%, #232c3a 100%)", boxShadow: "2px 2px 4px rgba(9,20,45,0.25)" }} />

            {/* chanfro interno + aro preto do visor */}
            <div className="rounded-[49px] bg-black" style={{ padding: "9px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22), inset 0 3px 8px rgba(0,0,0,0.95)" }}>
              {/* tela */}
              <div className="relative overflow-hidden rounded-[41px] bg-black" style={{ aspectRatio: "9 / 16" }}>
                <iframe
                  src="https://player.vimeo.com/video/1242239226"
                  title="Veja o app por dentro"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="block h-full w-full bg-black"
                />
                {/* ilha dinâmica com lente */}
                <div aria-hidden className="pointer-events-none absolute left-1/2 top-[12px] flex h-[26px] w-[92px] -translate-x-1/2 items-center justify-end gap-[6px] rounded-full bg-black pr-[10px]" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)" }}>
                  <span className="h-[10px] w-[10px] rounded-full" style={{ background: "radial-gradient(circle at 32% 30%, #4b6a9a 0%, #101826 62%, #05080f 100%)", boxShadow: "0 0 0 1px rgba(255,255,255,0.12)" }} />
                </div>
                {/* reflexo do vidro */}
                <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(115deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.08) 13%, transparent 30%, transparent 70%, rgba(255,255,255,0.10) 90%, rgba(255,255,255,0.20) 100%)" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Cta label="GARANTIR MINHA ROTINA AGORA →" note="🔒 Compra segura • Acesso imediato" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl md:text-4xl">Como funciona</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([n, t, d]) => <div key={n} className="text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">{n}</div><h3 className="mt-4 text-2xl">{t}</h3><p className="mt-1 text-muted-foreground">{d}</p></div>)}
        </div>
      </section>

      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-3xl md:text-5xl">Menos que um desinfetante</h2>
          <p className="mt-4 opacity-80">Um desinfetante custa mais que isso. Você leva tudo:</p>
          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left">
            {["Rotina de 7 dias pronta, com 3 tarefas por dia (Zona, Fluxo e Reset)", "Dia puxado: faça só o Reset de 5 minutos", "30 truques caseiros passo a passo", "Sequência, progresso do mês e checklist para marcar", "Acesso no celular, quando quiser", "Troque o dia ou a tarefa quando precisar"].map((x) => <li key={x}>✔ {x}</li>)}
          </ul>
          <p className="mt-8 text-6xl font-extrabold">R$10</p>
          <p className="mb-8 mt-2 opacity-80">pagamento único • sem mensalidade</p>
          <Cta label="GARANTIR MINHA ROTINA AGORA →" note="🔒 Compra segura • Acesso imediato" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center text-3xl md:text-4xl">Antes de decidir</h2>
        <div className="mt-8 space-y-8">
          {objections.map(([q, a]) => <div key={q}><h3 className="text-2xl">{q}</h3><p className="mt-3 text-lg text-muted-foreground">{a}</p></div>)}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl">Garantia incondicional de 7 dias</h2>
          <p className="mt-4 text-lg">Use por uma semana. Se não sentir sua rotina mais leve, devolvemos seus R$ 10. Sem perguntas.</p>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl">Mais uma semana igual a essa, ou uma semana com rotina?</h2>
          <p className="mb-8 mt-4 text-lg text-muted-foreground">Por R$ 10, você decide.</p>
          <Cta label="SIM, QUERO MINHA ROTINA POR R$10 →" note="Acesso imediato • Pagamento único • Garantia de 7 dias" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <dl className="divide-y border-y">
          {faqs.map(([q, a]) => <div key={q} className="py-6"><dt className="text-lg font-bold">{q}</dt><dd className="mt-2 text-muted-foreground">{a}</dd></div>)}
        </dl>
      </section>
    </main>
  );
}
