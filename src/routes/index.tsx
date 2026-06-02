import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/site/NavBar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { FeatureThink } from "@/components/site/FeatureThink";
import { PlatformCards } from "@/components/site/PlatformCards";
import { Pricing } from "@/components/site/Pricing";
import { FeaturesOrganize } from "@/components/site/FeaturesOrganize";
import { CTABanner } from "@/components/site/CTABanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scribbit — Ideas. Notes. Clarity." },
      {
        name: "description",
        content: "One smart notebook for note-taking, idea tracking, and daily planning — ready whenever inspiration hits.",
      },
      { property: "og:title", content: "Scribbit — Ideas. Notes. Clarity." },
      { property: "og:description", content: "One smart notebook for note-taking, idea tracking, and daily planning." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <TrustBar />
      <FeatureThink />
      <PlatformCards />
      <Pricing />
      <FeaturesOrganize />
      <CTABanner />
      <Footer />
    </main>
  );
}
