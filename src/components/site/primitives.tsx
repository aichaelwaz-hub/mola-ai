import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, as: Tag = "div", delay = 0 }: { children: ReactNode; className?: string; as?: "div" | "section" | "li" | "article"; delay?: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} data-visible={visible} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, intro, className }: { eyebrow: string; title: ReactNode; intro?: ReactNode; className?: string }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-signal" aria-hidden />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="mt-5 text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.02em] md:text-[44px]">{title}</h2>
      {intro && <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function Btn({ href, children, variant = "primary", className, type, onClick }: { href?: string; children: ReactNode; variant?: "primary" | "secondary"; className?: string; type?: "submit" | "button"; onClick?: () => void }) {
  const cls = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-[14px] font-semibold transition-[background,color,border,transform] duration-200 active:translate-y-px disabled:opacity-60",
    variant === "primary"
      ? "bg-signal text-signal-foreground hover:bg-foreground"
      : "border border-border-strong/60 bg-transparent text-foreground hover:border-foreground hover:bg-secondary",
    className,
  );
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type ?? "button"} onClick={onClick} className={cls}>{children}</button>;
}
