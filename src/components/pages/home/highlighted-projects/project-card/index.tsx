"use client";

import Image from "next/image";
import NextLink from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/src/lib/animations";
import { Project } from "@/src/@types/projects";
import { TechBadge } from "@/src/components/tech-badge";
import { CustomLink } from "@/src/components/custom-link";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <NextLink href={`/projects/${project.slug}`}>
          <Image
            width={420}
            height={304}
            src={project.thumbnail.url}
            alt={`Project ${project.title} Thumbnail`}
            className="w-full h-full object-cover rounded-lg"
          />
        </NextLink>
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={20}
            height={20}
            src={"/images/icons/project-title-icon.svg"}
            alt=""
          />
          <NextLink href={`/projects/${project.slug}`}>
            {project.title}
          </NextLink>
        </motion.h3>

        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8">
          {project?.technologies.map((tech, index) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + index * 0.07 }}
            />
          ))}
        </div>

        <CustomLink href={`/projects/${project.slug}`}>
          View project <HiArrowNarrowRight />
        </CustomLink>
      </div>
    </motion.div>
  );
};
