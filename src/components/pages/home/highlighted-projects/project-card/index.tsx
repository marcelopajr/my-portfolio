import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TechBadge } from "@/src/components/tech-badge";
import { CustomLink } from "@/src/components/custom-link";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Project Bookwise Thumbnail"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src={"/images/icons/project-title-icon.svg"}
            alt=""
          />
          Bookwise
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          obcaecati nisi facere sit odit libero ratione suscipit voluptas esse
          delectus nesciunt, veniam blanditiis quos laudantium corrupti
          praesentium tempora excepturi? Laudantium, distinctio.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name={"Next.js"} />
          <TechBadge name={"Next.js"} />
          <TechBadge name={"Next.js"} />
          <TechBadge name={"Next.js"} />
        </div>

        <CustomLink href={"/projects/book-wise"}>
          View project <HiArrowNarrowRight />
        </CustomLink>
      </div>
    </div>
  );
};
