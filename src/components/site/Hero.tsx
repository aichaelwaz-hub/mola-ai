import { useRef, type MouseEvent } from "react";
import heroImg from "@/assets/hero-cube.jpg";
import { Btn } from "./primitives";
import { axes } from "./content";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (!imgRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    imgRef.current.style.transform = `scale(1.06) translate3d(${x * -14}px, ${y * -10}px, 0)`;
  };
  return (
    <section id="top" onMouseMove={onMove} className="relative isolate overflow-hidden pt-[72px]">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-40" aria-hidden />
      <div className="container-lc grid grid-cols-1 lg:min-h-[min(calc(100svh-72px),900px)] items-center gap-10 py-14 lg:grid-cols-12 lg:gap-6 lg:py-20">
        <div className="lg:col-span-6 lg:pr-6">
          <div className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface-green px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Conseil en stratégie, transformation & IA</span>
          </div>
          <h1 className="mt-7 text-balance text-[38px] font-medium leading-[1.04] tracking-[-0.03em] sm:text-[48px] xl:text-[60px]">
            L’IA ne crée pas de valeur par magie. <span className="text-muted-foreground">Elle en crée quand l’entreprise change ce qui&nbsp;compte.</span>
          </h1>
          <p className="mt-7 max-w-[58ch] text-[16.5px] leading-relaxed text-muted-foreground">
            Nous accompagnons les dirigeants et leurs équipes pour identifier les opportunités pertinentes de l’intelligence artificielle, repenser les processus et transformer les expérimentations en résultats utiles, mesurables et maîtrisés.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn href="#contact">Identifier vos opportunités IA ↗</Btn>
            <Btn href="#approche" variant="secondary">Découvrir notre approche ↓</Btn>
          </div>
          <p className="mt-6 max-w-[52ch] border-l border-signal/60 pl-4 text-[13.5px] leading-relaxed text-muted-foreground">
            Du cadrage stratégique au déploiement — avec les personnes, les données et les contraintes réelles de votre organisation au centre.
          </p>
        </div>
        <div className="relative lg:col-span-6">
          <div className="halo pointer-events-none absolute -inset-16 -z-10" aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border lg:aspect-[4/5]">
            <div ref={imgRef} className="absolute inset-0 scale-[1.06] transition-transform duration-[1200ms] ease-out">
              <img src={heroImg} alt="" width={1600} height={1200} fetchPriority="high" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="hidden sm:inline">Clarifier · Prioriser · Transformer</span>
              <span aria-hidden className="ml-auto">LC—01</span>
            </div>
          </div>
        </div>
      </div>
      {/* 3. Bande de confiance — sans fausses preuves */}
      <div className="border-y border-border bg-card">
        <div className="container-lc grid gap-6 py-8 lg:grid-cols-12 lg:items-center">
          <p className="text-[15px] font-medium lg:col-span-4">Une transformation pensée à l’échelle de l’organisation.</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-3 lg:col-span-8 lg:justify-end">
            {axes.map((a, i) => (
              <li key={a} className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                {i > 0 && <span className="h-px w-5 bg-border-strong/50" aria-hidden />}
                <span className="text-signal" aria-hidden>0{i + 1}</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
