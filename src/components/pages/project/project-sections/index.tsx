"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fadeUpAnimation } from "@/src/lib/animations";
import { ProjectSection } from "@/src/@types/projects";

type ProjectSectionsProps = {
  sections: ProjectSection[];
  description: string;
};

export const ProjectSections = ({
  sections,
  description,
}: ProjectSectionsProps) => {
  const cleanedMarkdown = description
    .replace(/\\n+$/, "") // remove literal \n
    .replace(/(\r\n|\r|\n)+$/, ""); // remove real newlines if present

  return (
    <section className="container my-12 md:my-24 flex flex-col gap-8 md:gap-20">
      {sections.map(({ title, image }) => (
        <motion.div
          key={title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
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

      <motion.div
        key={"description"}
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none text-gray-300"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ node, ...props }) => (
              <h2
                className="text-xl md:text-2xl font-medium text-gray-300"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li className="text-gray-400" {...props} />
            ),
          }}
        >
          {cleanedMarkdown}
        </ReactMarkdown>
      </motion.div>
    </section>
  );
};
