import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem, Expertises, Approach, Context, Principles, Credibility, Offer, Faq } from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Conseil en stratégie et transformation IA | Ligne Claire";
const description =
  "Nous aidons les organisations au Cameroun et en Afrique centrale à prioriser leurs opportunités IA, transformer leurs processus et déployer des changements utiles, mesurables et maîtrisés.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Ligne Claire — Stratégie, transformation & IA" },
      { property: "og:description", content: "De la bonne question à la transformation utile." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ligne Claire — Stratégie, transformation & IA" },
      { name: "twitter:description", content: "De la bonne question à la transformation utile." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-signal-foreground">Aller au contenu</a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Expertises />
        <Approach />
        <Context />
        <Principles />
        <Credibility />
        <Offer />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
