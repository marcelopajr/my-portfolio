import { SectionTitle } from "@/src/components/section-title";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-6 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="jobs" title="Professional Experiences" />
        <p className="text-gray-400 mt-6">
          I'm always open to new challenges and exciting projects. Let's work
          together to create amazing solutions for your company!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};
