import { fetchHygraphQuery } from '@/src/utils/fetch-hygraph-query'
import { ProjectsPageData } from '@/src/@types/page-info'
import { PageIntroduction } from '@/src/components/pages/projects/page-introduction'
import { ProjectsList } from '@/src/components/pages/projects/projects-list'

export const metadata = {
  title: 'Projects',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects(first: 9) {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}
