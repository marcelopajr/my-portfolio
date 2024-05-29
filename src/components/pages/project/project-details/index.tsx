import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Project } from "@/src/@types/projects";
import { SectionTitle } from "@/src/components/section-title";
import { RichText } from "@/src/components/rich-text";
import { TechBadge } from "@/src/components/tech-badge";
import { Button } from "@/src/components/button";
import { CustomLink } from "@/src/components/custom-link";

type ProjectDetailsProps = {
  project: Project;
};
export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
      />

      <SectionTitle
        subtitle="projects"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        <RichText content={project.description.raw} />
      </div>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} />
        ))}
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        {project?.githubUrl && (
          <Link href={project.githubUrl} target="_blank">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              View on GitHub
            </Button>
          </Link>
        )}

        {project?.liveProjectUrl && (
          <Link href={project.liveProjectUrl} target="_blank">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Online Project
            </Button>
          </Link>
        )}
      </div>

      <CustomLink href={"/projects"} className="flex items-center gap-1.5">
        <HiArrowNarrowLeft size={20} /> Back to Projects
      </CustomLink>
    </section>
  );
};
