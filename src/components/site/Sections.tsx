import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, SectionHead, Btn } from "./primitives";
import { situations, expertises, steps, vigilance, principles, sectors, functions, proofs, conversation, faq } from "./content";
import { cn } from "@/lib/utils";

const section = "border-b border-border py-20 md:py-28";

export function Problem() {
  return (
    <section className={section} aria-labelledby="defi-title">
      <div className="container-lc">
        <SectionHead eyebrow="Le vrai défi" title={<span id="defi-title">Le sujet n’est pas d’ajouter de l’IA. C’est de savoir où elle mérite de changer le travail.</span>}
          intro="Les organisations sont confrontées à plusieurs décisions : quels cas d’usage prioriser, comment éviter les pilotes sans suite, comment protéger les données, comment faire adopter de nouvelles pratiques et comment mesurer la valeur au-delà de la démonstration." />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {situations.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 100} className="bg-background p-7 md:p-8">
              <span className="font-mono text-[12px] text-signal">0{i + 1}</span>
              <h3 className="mt-6 text-[19px] font-semibold leading-snug">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10 flex items-center gap-4">
          <span className="trace h-px flex-1 bg-signal/70" aria-hidden />
          <p className="text-[17px] font-medium">Nous commençons par le problème à résoudre — pas par le choix d’un outil.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Expertises() {
  return (
    <section id="expertises" className={section} aria-labelledby="exp-title">
      <div className="container-lc">
        <SectionHead eyebrow="Expertises" title={<span id="exp-title">Six capacités complémentaires.</span>} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertises.map((e, i) => (
            <Reveal as="article" key={e.n} delay={(i % 3) * 90} className="group relative flex flex-col rounded-lg border border-border bg-card p-7 transition-colors duration-300 hover:border-border-strong hover:bg-surface-green">
              <span className="absolute left-0 top-0 h-px w-0 bg-signal transition-[width] duration-500 group-hover:w-full" aria-hidden />
              <span className="font-mono text-[12px] tracking-[0.1em] text-signal">{e.n}</span>
              <h3 className="mt-8 text-[20px] font-semibold leading-snug tracking-[-0.01em]">{e.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{e.d}</p>
              <div className="mt-auto pt-7">
                <div className="border-t border-border pt-4">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">Livrables possibles</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/85">{e.l.charAt(0).toUpperCase() + e.l.slice(1)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approche" className={cn(section, "bg-card")} aria-labelledby="app-title">
      <div className="container-lc">
        <SectionHead eyebrow="Approche" title={<span id="app-title">De la question à la transformation.</span>} />
        <Reveal className="relative mt-16">
          <span className="trace absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-signal via-signal/60 to-border lg:block" aria-hidden />
          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((s) => (
              <li key={s.n} className="relative border-l border-border pl-6 lg:border-l-0 lg:pl-0">
                <span className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 border-signal bg-background lg:static lg:block" aria-hidden />
                <p className="font-mono text-[12px] text-muted-foreground lg:mt-6">Étape {s.n}</p>
                <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.01em]">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
                <div className="mt-5 rounded-md border border-border bg-background p-4">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-signal">Question de contrôle</p>
                  <p className="mt-2 text-[14px] leading-snug">{s.q}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="mt-14 max-w-3xl border-l-2 border-signal pl-5">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">Note de méthode</p>
          <p className="mt-2 text-[15px] leading-relaxed">L’accompagnement peut s’arrêter après le diagnostic, se poursuivre jusqu’au pilote ou couvrir la transformation et le déploiement. Le périmètre est explicité avant l’engagement.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Context() {
  return (
    <section id="secteurs" className={section} aria-labelledby="ctx-title">
      <div className="container-lc grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead eyebrow="Une approche ancrée, pas une recette importée" title={<span id="ctx-title">Une solution pertinente doit fonctionner dans les conditions où elle sera réellement utilisée.</span>}
            intro="Les contextes d’entreprise varient selon le pays, le secteur, la taille de l’organisation, les infrastructures et la maturité numérique. Nous vérifions donc les conditions de réussite avant de recommander un déploiement." />
          <Reveal className="mt-10 rounded-lg border border-border bg-surface-green p-6">
            <p className="eyebrow">Principe de conception</p>
            <p className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.01em]">« Utile dans le contexte réel, viable après le pilote. »</p>
            <p className="mt-2 text-[14px] text-muted-foreground">Pas « IA à tout prix ».</p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Nos points de vigilance — Cameroun & Afrique centrale</p>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {vigilance.map((v, i) => (
              <Reveal as="li" key={v.t} delay={i * 60} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[3rem_12rem_minmax(0,1fr)]">
                <span className="font-mono text-[12px] text-signal">0{i + 1}</span>
                <h3 className="text-[16px] font-semibold">{v.t}</h3>
                <p className="col-start-2 text-[15px] leading-relaxed text-muted-foreground sm:col-start-3">{v.d.charAt(0).toUpperCase() + v.d.slice(1)}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-[16px] leading-relaxed">L’objectif n’est pas seulement de faire fonctionner une démonstration. C’est de concevoir une solution dont l’usage, le coût et la maintenance restent réalistes.</p>
        </div>
      </div>

      <div className="container-lc mt-24">
        <SectionHead eyebrow="Secteurs & fonctions" title="Une méthode transversale. Des priorités adaptées à chaque métier."
          intro="Les cas d’usage doivent être sélectionnés en fonction des enjeux réels, et non d’une liste générique de tendances. Les secteurs ci-dessous sont des terrains possibles de travail, pas des références clients revendiquées." />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <li key={s} className="flex min-h-28 flex-col justify-between gap-6 bg-background p-5 transition-colors hover:bg-card">
              <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[15px] font-medium leading-snug">{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-signal">Fonctions concernées</p>
          <p className="text-[15px] text-muted-foreground">{functions.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section id="points-de-vue" className={cn(section, "bg-card")} aria-labelledby="pr-title">
      <div className="container-lc">
        <SectionHead eyebrow="Points de vue · Principes de travail" title={<span id="pr-title">Clarté stratégique. Expérimentation pragmatique. Adoption humaine. Résultats mesurables.</span>} />
        <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 80} className="border-t border-border-strong/50 pt-5">
              <span className="font-mono text-[12px] text-signal">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-[17px] font-semibold leading-snug">{p.t}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Credibility() {
  return (
    <section id="a-propos" className={section} aria-labelledby="cr-title">
      <div className="container-lc grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead eyebrow="À propos · Crédibilité" title={<span id="cr-title">La confiance se gagne par la méthode et par les preuves.</span>}
            intro="Nous ne simulons ni ancienneté ni base de clients. Nos références seront publiées au fur et à mesure qu’elles seront vérifiables et autorisées." />
          <Reveal className="mt-8 space-y-2 text-[15px]">
            <p><span className="text-muted-foreground">Positionnement —</span> Nous aidons les organisations à décider où l’IA crée une valeur réelle, à transformer les façons de travailler et à déployer les changements de manière maîtrisée.</p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Preuves publiées, dans cet ordre</p>
          <ol className="mt-5 space-y-3">
            {proofs.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 70} className="flex items-center gap-5 rounded-md border border-border bg-card px-5 py-4">
                <span className="font-mono text-[12px] text-signal">{i + 1}</span>
                <span className="flex-1 text-[15px]">{p}</span>
                <span className="hidden shrink-0 rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:inline">À venir</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Offer() {
  return (
    <section className={cn(section, "relative overflow-hidden")} aria-labelledby="of-title">
      <div className="halo pointer-events-none absolute -right-40 top-0 h-[520px] w-[720px]" aria-hidden />
      <div className="container-lc relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHead eyebrow="Un premier pas utile" title={<span id="of-title">Vous n’avez pas besoin d’avoir toutes les réponses pour commencer.</span>}
            intro="Une conversation structurée permet de clarifier le problème, les parties prenantes, les contraintes et la prochaine décision utile." />
          <div className="mt-9"><Btn href="#contact">Préparer une conversation ↗</Btn></div>
        </div>
        <Reveal className="rounded-lg border border-border bg-card/80 p-7 lg:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">La conversation peut couvrir</p>
          <ul className="mt-5 space-y-4">
            {conversation.map((c) => (
              <li key={c} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden />
                <span>{c.charAt(0).toUpperCase() + c.slice(1)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={cn(section, "bg-card")} aria-labelledby="faq-title">
      <div className="container-lc grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead eyebrow="FAQ" title={<span id="faq-title">Questions fréquentes.</span>} />
        </div>
        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button id={`faq-b-${i}`} aria-expanded={isOpen} aria-controls={`faq-p-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-medium">
                    {f.q}
                    <Plus className={cn("h-5 w-5 shrink-0 text-signal transition-transform duration-300", isOpen && "rotate-45")} aria-hidden />
                  </button>
                </h3>
                <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={!isOpen} className="pb-6 pr-10">
                  <p className={cn("max-w-[64ch] text-[15px] leading-relaxed text-muted-foreground", f.pending && "border-l-2 border-signal pl-4")}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
