import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SectionTitle } from "@/src/components/section-title";
import { TechBadge } from "@/src/components/tech-badge";
import { Button } from "@/src/components/button";
import { CustomLink } from "@/src/components/custom-link";

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "url(/images/hero-bg.png) no-repeat center/cover, url(https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA) no-repeat center/cover",
        }}
      />

      <SectionTitle
        subtitle="projects"
        title="BookWise"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        BookWise is a book review platform developed during Rocketseat's Ignite
        bootcamp. Starting with just a Figma design, we needed to develop this
        complete Full Stack application using Next.js.
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <Link href={"https://github.com/marcelopajr"} target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            View on GitHub
          </Button>
        </Link>

        <Link href={"https://github.com/marcelopajr"} target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Online Project
          </Button>
        </Link>
      </div>

      <CustomLink href={"/projects"} className="flex items-center gap-1.5">
        <HiArrowNarrowLeft size={20} /> Back to Projects
      </CustomLink>
    </section>
  );
};
