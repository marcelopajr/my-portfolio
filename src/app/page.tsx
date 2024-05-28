import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import { HomePageData } from "../@types/page-info";
import { HeroSection } from "../components/pages/home/hero-section";
import { KnownTechs } from "../components/pages/home/known-techs";
import { HighlightedProjects } from "../components/pages/home/highlighted-projects";
import { WorkExperience } from "../components/pages/home/work-experience";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24 // 1 day
  );
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
