import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import hero from "@/assets/antes-depois.webp";
import tela1 from "@/assets/app-tela-1.webp";
import tela2 from "@/assets/app-tela-2.webp";
import tela3 from "@/assets/app-tela-3.webp";
import tela4 from "@/assets/app-tela-4.webp";
import { Button } from "@/components/ui/button";
import { initMetaPixel, trackInitiateCheckout } from "@/lib/meta-pixel";

const CHECKOUT = "https://pay.wiapy.com/Fi5MWoXDTg";

const CLARITY_SNIPPET = `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "z7fk4a799i");`;

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
    scripts: [{ type: "text/javascript", children: CLARITY_SNIPPET }],
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
  "“Nunca sei por onde começar.” Olha para a casa toda e trava, sem saber qual tarefa fazer primeiro.",
  "“Começo animada e largo.” Monta uma lista ou um caderno, mas em poucos dias a rotina some.",
  "“Faço tudo de uma vez e fico exausta.” Deixa acumular e acaba com uma faxina pesada que consome o fim de semana.",
  "“Já esqueci o que eu tinha feito.” Sem registro, não lembra o que já foi feito, nem vê o progresso.",
];

const telas = [tela1, tela2, tela3, tela4];

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
  ["Funciona no meu celular?", "Funciona em iPhone e Android, direto pelo navegador, e também no seu Computador."],
  ["Tenho pouco tempo, serve pra mim?", "Serve. São a partir de 30 minutos por dia, e nos dias corridos você pode fazer só o Reset básico de poucos minutos."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia e recebe 100% de volta."],
  ["Como recebo o acesso?", "Logo após o pagamento, você recebe o acesso para abrir o app no celular."],
  ["Meu progresso fica salvo?", "Fica salvo no aparelho e no navegador em que você usa o app."],
];

function Index() {
  useEffect(() => { initMetaPixel(); }, []);

  return (
    <main className="overflow-x-hidden">
      <div className="bg-ink px-5 py-3 text-center text-sm font-semibold text-ink-foreground">
        🔥 Oferta de lançamento: R$10,00 depois R$37,00
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-secondary-foreground">Para quem não sabe por onde começar na casa</span>
          <h1 className="text-4xl leading-tight md:text-6xl">Sua casa organizada no celular, do seu jeito</h1>
          <p className="text-lg text-muted-foreground">Dia, semana e mês já vêm planejados. Troque tarefas, crie as suas e vá marcando o que fez, sem caderno nem planilha.</p>
        </div>
        <img src={hero} alt="Antes e depois da casa com a rotina leve" width={1200} height={1200} className="w-full rounded-2xl shadow-2xl" />
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl md:text-4xl">Você se identifica com alguma dessas?</h2>
          <ul className="mt-8 space-y-3">
            {pains.map((p) => <li key={p} className="flex gap-3 rounded-lg bg-card p-4 shadow-sm"><span className="text-destructive">✕</span><span>{p}</span></li>)}
          </ul>
          <p className="mt-8 text-center text-lg font-bold text-primary">Se sim, esse aplicativo é pra você.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-16">
        <h2 className="px-5 text-center text-4xl md:text-5xl">Veja por dentro do Aplicativo</h2>
        <p className="mt-3 text-center font-bold text-primary">Arraste pro lado para ver →</p>
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
          {telas.map((src, i) => (
            <img key={src} src={src} alt={`Tela ${i + 1} do aplicativo`} loading="lazy" className="w-[75%] max-w-xs shrink-0 snap-center rounded-3xl shadow-xl" />
          ))}
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
            {["Rotina de 7 dias pronta, com 3 tarefas por dia (Zona, Fluxo e Reset)", "Rotina estratégica já pronta", "30 truques caseiros passo a passo", "Dia, Mês e Semana com checklist pronto para marcar", "Acesso no celular e computador, quando quiser", "Troque o dia ou a tarefa quando precisar"].map((x) => <li key={x}>✔ {x}</li>)}
          </ul>
          <p className="mt-8 text-6xl font-extrabold">R$10</p>
          <p className="mb-8 mt-2 opacity-80">pagamento único • sem mensalidade</p>
          <Cta label="GARANTIR MINHA ROTINA AGORA →" note="🔒 Compra segura • Acesso imediato" />
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl">Garantia incondicional de 7 dias</h2>
          <p className="mt-4 text-lg">Use por uma semana. Se não sentir sua rotina mais leve, devolvemos seus R$ 10. Sem perguntas.</p>
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
