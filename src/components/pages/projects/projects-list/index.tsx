"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeDownAnimation } from "@/src/lib/animations";
import { Project } from "@/src/@types/projects";
import { ProjectCard } from "./project-card";

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          {...fadeDownAnimation}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
