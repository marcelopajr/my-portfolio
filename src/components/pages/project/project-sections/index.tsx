"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeDownAnimation } from "@/src/lib/animations";
import { ProjectSection } from "@/src/@types/projects";

type ProjectSectionsProps = {
  sections: ProjectSection[];
};

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map(({ title, image }) => (
        <motion.div
          key={title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeDownAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {title}
          </h2>
          <Image
            width={1080}
            height={672}
            src={image.url}
            alt={`${title} Session Image`}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  );
};
