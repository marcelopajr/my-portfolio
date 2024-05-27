import { PageIntroduction } from "@/src/components/pages/projects/page-introduction";
import { ProjectsList } from "@/src/components/pages/projects/projects-list";

export default async function Projects() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  );
}
