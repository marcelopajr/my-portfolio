import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'
import { HomePageData } from '../@types/page-info'
import { HeroSection } from '../components/pages/home/hero-section'
import { KnownTechs } from '../components/pages/home/known-techs'
import { HighlightedProjects } from '../components/pages/home/highlighted-projects'
import { WorkExperience } from '../components/pages/home/work-experience'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies(first: 30) {
        name
      }
      profilePicture {
        url
      }
      socials {
        name
        url
        iconSvg
      }
      knownTechs(first: 30) {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies(first: 30) {
          name
        }
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      technologies(first: 30) {
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

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
