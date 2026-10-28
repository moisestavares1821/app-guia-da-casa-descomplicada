import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import hero from "@/assets/hero.jpg";
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
  "Limpa o fim de semana todo e na terça já bagunçou",
  "Olha pra casa e não sabe por onde começar",
  "Começa planner e larga no terceiro dia",
  "Gasta caro em produto que não resolve",
  "Dorme cansada sem a sensação de ter dado conta",
  "Sente vergonha quando chega visita de surpresa",
];

const benefits = [
  ["📅", "Rotina de 7 dias pronta", "Você nunca mais acorda sem saber o que fazer."],
  ["✅", "3 tarefas por dia", "A casa melhora aos poucos, sem faxina maratona."],
  ["🗂️", "Planner de 4 semanas", "Você enxerga o mês e para de começar do zero."],
  ["🧽", "30 truques passo a passo", "Box, fogão, panela e espelho com soluções simples."],
  ["💰", "Vinagre, limão e bicarbonato", "Menos gasto com produto caro."],
  ["🎯", "Checklists e conquistas", "Você vê o progresso e quer continuar."],
];

const steps = [
  ["1", "Compre por R$10", "Pagamento rápido e seguro."],
  ["2", "Abra o app no celular", "Instala na tela inicial em segundos."],
  ["3", "Siga o dia", "Faça as 3 tarefas e marque."],
];

const objections = [
  ['"Dica de limpeza eu acho de graça na internet."', "Acha, soltas, e perde tempo escolhendo. Aqui você tem a ordem pronta: o que fazer, em que dia, em quanto tempo."],
  ['"Eu não tenho tempo."', "São 3 tarefas por dia. Nos dias corridos, tem a faxina rápida de 15 minutos."],
  ['"Eu não sou organizada."', "Perfeito. O app foi feito pra isso: ele organiza por você."],
];

const faqs = [
  ["É mensalidade?", "Não. Pagamento único de R$ 10."],
  ["Preciso comprar produtos caros?", "Não. Os truques usam vinagre, limão, bicarbonato e itens que você já tem em casa."],
  ["Funciona no meu celular?", "Funciona em iPhone e Android, direto pelo navegador."],
  ["Tenho pouco tempo, serve pra mim?", "Serve. São 3 tarefas por dia, e tem a faxina rápida de 15 minutos para os dias corridos."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia e recebe 100% de volta."],
  ["Como recebo o acesso?", "Logo após o pagamento, você recebe o acesso para abrir o app no celular."],
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
          <Cta label="QUERO MINHA ROTINA POR R$10 →" note="Pagamento único de R$10 • Acesso imediato • Garantia de 7 dias" />
        </div>
        <img src={hero} alt="Mulher sorrindo em cozinha limpa segurando o celular" width={1200} height={1200} className="w-full rounded-2xl shadow-2xl" />
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
          <p>Sua casa não vive bagunçada por falta de esforço. Vive bagunçada por falta de sistema.</p>
          <p>O app tira a decisão da sua cabeça: cada dia da semana já tem suas 3 tarefas. Você abre, faz e marca.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([i, t, d]) => <div key={t} className="rounded-lg border bg-card p-6"><h3 className="text-2xl">{i} {t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>)}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl md:text-4xl">Veja um dia da sua rotina</h2>
          <p className="mt-4 text-lg text-muted-foreground">Quarta-feira. Três tarefas, nada mais:</p>
          <ul className="mt-6 space-y-4 text-lg">
            <li>☐ Limpei panela com bicarbonato</li>
            <li>☐ Organizei 1 prateleira ou armário</li>
            <li>☐ Borrifei aromatizador em cortinas ou sofá</li>
          </ul>
          <p className="mt-6 font-bold text-primary">Sem pensar no que fazer. Só abrir e marcar.</p>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Veja um truque de dentro do app</h2>
            <p className="mt-4 text-secondary-foreground">Lê em 30 segundos, aplica na hora. Sem enrolação.</p>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-xl">
            <p className="text-sm font-bold text-primary">02 • Limpeza Eficiente</p>
            <h3 className="mt-1 text-2xl">Panela queimada sem esfregar</h3>
            <p className="mt-4 text-sm font-bold">Você vai precisar</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Bicarbonato", "Vinagre", "Água"].map((x) => <span key={x} className="rounded-full bg-accent px-3 py-1 text-sm">{x}</span>)}
            </div>
            <p className="mt-4 text-sm font-bold">Como fazer</p>
            <p className="mt-1 text-muted-foreground">Cubra o fundo com bicarbonato, adicione vinagre e aqueça por 5 min. Depois de esfriar, a crosta solta fácil.</p>
          </div>
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
            {["Rotina de 7 dias pronta", "Planner de 4 semanas", "30 truques caseiros passo a passo", "Desafio com progresso marcado", "Acesso no celular, quando quiser"].map((x) => <li key={x}>✔ {x}</li>)}
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
