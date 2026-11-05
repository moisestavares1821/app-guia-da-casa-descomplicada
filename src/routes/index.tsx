import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroAsset from "@/assets/antes-depois.webp.asset.json";
import phoneMockup from "@/assets/phone-mockup.png";
const hero = heroAsset.url;
import b1 from "@/assets/bonus-1.webp.asset.json";
import b2 from "@/assets/bonus-2.webp.asset.json";
import b3 from "@/assets/bonus-3.webp.asset.json";
import b4 from "@/assets/bonus-4.webp.asset.json";
import b5 from "@/assets/bonus-5.webp.asset.json";
import b6 from "@/assets/bonus-6.webp.asset.json";
import d1 from "@/assets/depoimento-1.webp.asset.json";
import d2 from "@/assets/depoimento-2.webp.asset.json";
import d3 from "@/assets/depoimento-3.webp.asset.json";
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

const bonus = [b1.url, b2.url, b3.url, b4.url, b5.url, b6.url];
const depoimentos = [d1.url, d2.url, d3.url];

function Marquee({ images, alt, itemClass }: { images: string[]; alt: string; itemClass: string }) {
  const list = [...images, ...images];
  return (
    <div className="mt-10 overflow-hidden">
      <div className="animate-marquee flex w-max gap-4 px-2">
        {list.map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${(i % images.length) + 1}`} loading="lazy" aria-hidden={i >= images.length} className={`shrink-0 rounded-2xl shadow-xl ${itemClass}`} />
        ))}
      </div>
    </div>
  );
}

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
        🔥 Oferta de lançamento: apenas R$27
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
        <h2 className="px-5 text-center text-4xl md:text-5xl">Como acesso o Aplicativo?</h2>
        <p className="mt-3 text-center font-bold text-primary">Veja abaixo o tutorial:</p>
        <div className="relative mx-auto mt-10 w-[min(330px,82vw)]" style={{ aspectRatio: "1024 / 1920" }}>
          <img src={phoneMockup} alt="" aria-hidden="true" width={1024} height={1920} loading="lazy" className="absolute inset-0 h-full w-full drop-shadow-2xl" />
          <div className="absolute overflow-hidden bg-screen" style={{ left: "9.08%", right: "9.08%", top: "1.51%", bottom: "1.67%", borderRadius: "13.96% / 6.29%" }}>
            <iframe src="https://player.vimeo.com/video/1243569411?title=0&byline=0&portrait=0" title="Tutorial: como acessar o aplicativo" loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen className="h-full w-full" />
            <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 rounded-full bg-screen" style={{ top: "3%", width: "26%", height: "3.2%" }} />
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-5xl overflow-hidden px-5 py-16">
        <h2 className="text-center text-3xl md:text-4xl"><span className="text-primary">Bônus Exclusivo:</span> Você ainda leva a versão imprimível do Aplicativo!</h2>
        <Marquee images={bonus} alt="Página imprimível" itemClass="w-56 md:w-72" />
      </section>

      <section className="bg-muted py-16">
        <h2 className="px-5 text-center text-3xl md:text-4xl">O que dizem quem já usa</h2>
        <Marquee images={depoimentos} alt="Depoimento de cliente no WhatsApp" itemClass="w-64 md:w-80" />
      </section>

      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="text-center text-3xl md:text-5xl">Menos que um desinfetante</h2>
          <p className="mt-4 text-center opacity-80">Um desinfetante custa mais que isso. Você leva tudo:</p>

          <div className="relative mt-12 rounded-[2rem] border-2 border-primary bg-card p-6 pt-9 text-card-foreground shadow-2xl sm:p-8 sm:pt-10">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary-foreground">
              ★ Oferta de lançamento
            </span>

            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Acesso completo</p>

            <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
              <span className="text-lg font-semibold text-muted-foreground line-through">R$ 37</span>
              <span className="text-6xl font-extrabold leading-none text-primary">
                R$27<span className="align-super text-2xl">,00</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Pagamento único • sem mensalidade • acesso imediato</p>

            <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
              {[
                "O aplicativo completo: rotina do dia, da semana e do mês",
                "3 tarefas por dia, com checklist pronto para marcar",
                "Troque tarefas, crie as suas e veja seu progresso",
                "30 truques caseiros passo a passo",
                "Bônus: versão imprimível do aplicativo (6 páginas)",
                "Acesso no celular e no computador",
                "Garantia incondicional de 7 dias",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-[15px] leading-snug">
                  <span className="shrink-0 font-extrabold text-primary">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Cta label="LIBERAR MEU ACESSO!" note="🔒 Compra segura • Garantia de 7 dias" />
            </div>
          </div>
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
