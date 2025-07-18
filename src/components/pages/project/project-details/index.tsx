"use client";

import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/src/lib/animations";
import { Project } from "@/src/@types/projects";
import { SectionTitle } from "@/src/components/section-title";
import { TechBadge } from "@/src/components/tech-badge";
import { Button } from "@/src/components/button";
import { CustomLink } from "@/src/components/custom-link";

type ProjectDetailsProps = {
  project: Project;
};
export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.webp) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projects"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <motion.div
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}
        </p>
      </motion.div>

      <div className="w-full max-w-[640px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, index) => (
          <TechBadge
            key={tech.name}
            name={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: index * 0.07 }}
          />
        ))}
      </div>

      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
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
      </motion.div>

      <CustomLink href={"/projects"} className="flex items-center gap-1.5">
        <HiArrowNarrowLeft size={20} /> Back to Projects
      </CustomLink>
    </section>
  );
};
