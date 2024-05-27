import { SectionTitle } from "@/src/components/section-title";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ProjectCard } from "./project-card";
import { HorizontalDivider } from "@/src/components/divider/horizontal";
import { CustomLink } from "@/src/components/custom-link";

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="highlights" title="Featured Projects" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Are you interested?</span>
          <CustomLink href={"/projects"} className="inline-flex">
            View all projects <HiArrowNarrowRight />
          </CustomLink>
        </p>
      </div>
    </section>
  );
};
