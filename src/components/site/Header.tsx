import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "./content";
import { Btn } from "./primitives";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300", scrolled || open ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-transparent")}>
      <div className="container-lc flex h-[72px] items-center justify-between gap-6">
        <a href="#top" aria-label="Ligne Claire — retour en haut" className="shrink-0"><Logo /></a>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block"><Btn href="#contact" variant="secondary" className="min-h-10 px-4 text-[13px]">Parlons de vos enjeux ↗</Btn></div>
        <button className="grid h-11 w-11 place-items-center rounded-md border border-border lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="container-lc border-t border-border pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {nav.map((n) => (
              <li key={n.id}><a onClick={() => setOpen(false)} href={`#${n.id}`} className="flex min-h-12 items-center border-b border-border/60 text-[16px]">{n.label}</a></li>
            ))}
          </ul>
          <Btn href="#contact" className="mt-4 w-full" onClick={() => setOpen(false)}>Parlons de vos enjeux ↗</Btn>
        </nav>
      )}
    </header>
  );
}
