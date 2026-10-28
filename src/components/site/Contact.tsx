import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { contactSchema, initialContact } from "@/lib/contact-form";
import { Btn, Reveal } from "./primitives";
import { LogoMark } from "./Logo";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<keyof typeof initialContact, string>>;

const field = "mt-2 block w-full rounded-md border border-input bg-background px-4 text-[16px] text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-signal focus:outline-none focus-visible:outline-2 focus-visible:outline-ring aria-[invalid=true]:border-destructive";

export function Contact() {
  const [v, setV] = useState(initialContact);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const set = (k: keyof typeof initialContact, val: string | boolean) => setV((p) => ({ ...p, [k]: val }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const r = contactSchema.safeParse(v);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => { const k = i.path[0] as keyof Errors; if (!errs[k]) errs[k] = i.message; });
      setErrors(errs);
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setErrors({});
    setStatus("loading");
    // Maquette : aucun envoi réel tant que l’adresse et le traitement des données ne sont pas définis.
    setTimeout(() => setStatus("success"), 700);
  };

  const err = (k: keyof Errors) => errors[k] && <p id={`e-${k}`} role="alert" className="mt-2 text-[13px] text-destructive">{errors[k]}</p>;

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28" aria-labelledby="ct-title">
      <div className="halo pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2" aria-hidden />
      <div className="container-lc relative grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3"><span className="h-px w-8 bg-signal" aria-hidden /><p className="eyebrow">Ouvrons la conversation</p></div>
          <h2 id="ct-title" className="mt-5 text-balance text-[38px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[54px]">Quel changement mérite de commencer maintenant&nbsp;?</h2>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-muted-foreground">Présentez-nous l’enjeu que vous cherchez à résoudre. Nous pourrons clarifier les objectifs, les contraintes et les premières options à explorer.</p>
          <dl className="mt-10 space-y-3 border-t border-border pt-6 font-mono text-[13px]">
            <div className="flex gap-4"><dt className="w-20 text-muted-foreground">E-mail</dt><dd>[adresse e-mail professionnelle vérifiée]</dd></div>
            <div className="flex gap-4"><dt className="w-20 text-muted-foreground">Tél.</dt><dd>[téléphone professionnel, si souhaité]</dd></div>
          </dl>
        </Reveal>

        <div className="lg:col-span-7">
          {status === "success" ? (
            <div role="status" className="flex h-full flex-col justify-center rounded-lg border border-signal/50 bg-surface-green p-10">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-signal text-signal-foreground"><Check className="h-6 w-6" aria-hidden /></span>
              <h3 className="mt-6 text-[24px] font-semibold">Merci, votre demande est prête.</h3>
              <p className="mt-3 max-w-[50ch] text-[15px] leading-relaxed text-muted-foreground">Version de démonstration : aucun message n’a été envoyé. L’envoi réel sera activé dès que l’adresse de contact et le traitement des données seront validés.</p>
              <div className="mt-8"><Btn variant="secondary" onClick={() => { setV(initialContact); setStatus("idle"); }}>Nouvelle demande</Btn></div>
            </div>
          ) : (
            <form noValidate onSubmit={submit} className="rounded-lg border border-border bg-card p-6 md:p-9" aria-describedby="form-note">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="text-[14px] font-medium">Nom</label>
                  <input id="f-name" autoComplete="name" value={v.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} className={cn(field, "h-12")} />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor="f-email" className="text-[14px] font-medium">E-mail professionnel</label>
                  <input id="f-email" type="email" autoComplete="email" value={v.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} className={cn(field, "h-12")} />
                  {err("email")}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="f-organization" className="text-[14px] font-medium">Organisation <span className="font-normal text-muted-foreground">(facultatif)</span></label>
                  <input id="f-organization" autoComplete="organization" value={v.organization} onChange={(e) => set("organization", e.target.value)} aria-invalid={!!errors.organization} className={cn(field, "h-12")} />
                  {err("organization")}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="f-topic" className="text-[14px] font-medium">Sujet ou enjeu</label>
                  <textarea id="f-topic" rows={5} value={v.topic} onChange={(e) => set("topic", e.target.value)} aria-invalid={!!errors.topic} aria-describedby={errors.topic ? "e-topic" : undefined} className={cn(field, "resize-y py-3")} placeholder="Le résultat à améliorer, le processus concerné, vos contraintes…" />
                  {err("topic")}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="f-consent" className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-muted-foreground">
                    <input id="f-consent" type="checkbox" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "e-consent" : undefined} className="mt-1 h-5 w-5 shrink-0 accent-[var(--signal)]" />
                    J’accepte que ces informations soient utilisées uniquement pour répondre à ma demande. [Politique de confidentialité à valider.]
                  </label>
                  {err("consent")}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p id="form-note" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Démonstration · aucun envoi réel</p>
                <Btn type="submit" className={cn(status === "loading" && "pointer-events-none opacity-70")}>{status === "loading" ? "Préparation…" : "Parler de votre projet ↗"}</Btn>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [["Expertises", "#expertises"], ["Approche", "#approche"], ["Points de vue", "#points-de-vue"], ["Contact", "#contact"]];
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-lc grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5"><LogoMark /><span className="text-[17px] font-semibold tracking-tight">Ligne Claire</span></div>
          <p className="mt-3 text-[14px] text-muted-foreground">Conseil en stratégie, transformation & IA</p>
          <p className="mt-1 font-mono text-[12px] text-signal">Clarifier. Prioriser. Transformer.</p>
        </div>
        <nav aria-label="Pied de page" className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-3 text-[14px] sm:grid-cols-3">
            {links.map(([l, h]) => <li key={l}><a href={h} className="text-muted-foreground hover:text-foreground">{l}</a></li>)}
            <li><span className="text-muted-foreground/70">Mentions légales [à venir]</span></li>
            <li><span className="text-muted-foreground/70">Confidentialité [à venir]</span></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="container-lc py-6 font-mono text-[11.5px] text-muted-foreground">© [année] [raison sociale vérifiée]. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
