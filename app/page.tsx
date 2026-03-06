import { Navbar } from "@/components/navbar";
import { SectionDivider } from "@/components/section-divider";
import { HeroWithCursor } from "@/components/hero-with-cursor";
import { HeroTestimonial } from "@/components/hero-testimonial";
import { TestimonialSection } from "@/components/testimonial-section";
import { WorkProcessSection } from "@/components/work-process-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { QualitiesSection } from "@/components/qualities-section";
import { ExperienceSection } from "@/components/experience-section";
import { AwardsSection } from "@/components/awards-section";
import { GetStartedSection } from "@/components/get-started-section";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative mt-[7rem] min-h-screen border-t border-dashed border-[#d6d8da] dark:border-[#272c37]">
        {/* Horizontal border layer – on top so it stays visible when column extends up */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-10 border-t border-dashed border-[#d6d8da] dark:border-[#272c37]"
          aria-hidden
        />
        {/* Outer: full width, 32px horizontal padding (Framer "Header" wrapper) */}
        <div className="flex flex-col items-center px-8 ">
          {/* Inner: content column – vertical dashed borders from top of page */}
          <div className="-mt-[7rem] flex w-full max-w-[1280px] flex-col border-x border-dashed border-[#d6d8da] pt-24 dark:border-[#272c37] ">
            {/* Hero section: dotted pattern only here */}
            <HeroWithCursor />

            <HeroTestimonial />

            <SectionDivider />

            <WorkProcessSection />

            <SectionDivider />

            <ServicesSection />

            <SectionDivider />

            <ProjectsSection />

            <SectionDivider />

            <QualitiesSection />

            <SectionDivider />

            <ExperienceSection />

            <SectionDivider />

            <AwardsSection />

            <SectionDivider />

            <TestimonialSection />

            <SectionDivider />

            <GetStartedSection />

          </div>
        </div>
      </main>
    </>
  );
}