import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/site/NavBar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { FeatureThink } from "@/components/site/FeatureThink";
import { PlatformCards } from "@/components/site/PlatformCards";
import { Pricing } from "@/components/site/Pricing";
import { FeaturesOrganize } from "@/components/site/FeaturesOrganize";
import { FAQ } from "@/components/site/FAQ";
import { CTABanner } from "@/components/site/CTABanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Notely — Ideas. Notes. Clarity." },
      {
        name: "description",
        content:
          "One smart notebook for note-taking, idea tracking, and daily planning. Free forever.",
      },
      { property: "og:title", content: "Notely — Ideas. Notes. Clarity." },
      {
        property: "og:description",
        content: "One smart notebook for note-taking, idea tracking, and daily planning.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavBar />
      <Hero />
      <TrustBar />
      <FeatureThink />
      <PlatformCards />
      <Pricing />
      <FeaturesOrganize />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
