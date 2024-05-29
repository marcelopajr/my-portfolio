import { fetchHygraphQuery } from "@/src/utils/fetch-hygraph-query";
import {
  ProjectPageData,
  ProjectsPageStaticData,
} from "@/src/@types/page-info";
import { ProjectDetails } from "@/src/components/pages/project/project-details";
import { ProjectSections } from "@/src/components/pages/project/project-sections";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `;
  const data = fetchHygraphQuery<ProjectPageData>(
    query,
    1000 * 60 * 60 * 24 // 1 day
  );

  return data;
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateStaticParams() {
  const query = `
  query ProjectsSlugsQuery {
    projects(first: 100) {
      slug
    }
  }
  `;

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return projects;
}
