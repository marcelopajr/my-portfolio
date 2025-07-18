import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/src/@types/projects'
import { SectionTitle } from '@/src/components/section-title'
import { HorizontalDivider } from '@/src/components/divider/horizontal'
import { CustomLink } from '@/src/components/custom-link'
import { ProjectCard } from './project-card'

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="highlights" title="Featured Projects" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Are you interested?</span>
          <CustomLink href={'/projects'} className="inline-flex">
            View all projects <HiArrowNarrowRight />
          </CustomLink>
        </p>
      </div>
    </section>
  )
}
