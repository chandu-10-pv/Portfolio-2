import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/site-nav";
import { SideRail } from "@/components/portfolio/side-rail";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { FeaturedBuild } from "@/components/portfolio/featured-build";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { ThankYou } from "@/components/portfolio/thank-you";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { ResumeProvider } from "@/components/portfolio/resume-dialog";

const TITLE = "Chandu — B.Tech CSE AI Developer Portfolio";
const DESCRIPTION =
  "Pachava Vengala Chandu: first-year B.Tech CSE (AI) student at JOY University building practical AI-powered student tools. Open for internships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ResumeProvider>
      <SiteNav />
      <SideRail />
      <main>
        <Hero />
        <About />
        <FeaturedBuild />
        <Experience />
        <Contact />
        <ThankYou />
      </main>
      <SiteFooter />
    </ResumeProvider>
  );
}
