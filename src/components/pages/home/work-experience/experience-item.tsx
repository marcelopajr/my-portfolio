import Image from "next/image";
import { TechBadge } from "@/src/components/tech-badge";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={"https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5"}
            width={40}
            height={40}
            alt="Company logo"
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/the-brooklyn-brothers/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ The Brooklyn Brothers
          </a>
          <h4 className="text-gray-300">React Front-end Developer</h4>
          <span className="text-gray-500">Oct 2023 • Present • (8 mos)</span>
          <p className="text-gray-400">
            • Developed and maintained international websites for Unilever and
            Rexona, improving performance, SEO, and search engine rankings. •
            Refactored components and pages, adhering to best practices and
            accessibility standards. • Collaborated with global clients,
            providing technical support and clear communication. • Utilized
            React, Sanity, Gatsby, TypeScript, and SASS to deliver high-quality
            web experiences.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Skills</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name={"React"} />
          <TechBadge name={"React"} />
          <TechBadge name={"React"} />
        </div>
      </div>
    </div>
  );
};
