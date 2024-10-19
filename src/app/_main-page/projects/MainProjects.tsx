import MainProjectsClient from '@/app/_main-page/projects/MainProjectsClient';
import { fetchProjects } from '@/shared/lib/fetches/fetchProjects/fetchProjects';
import { IProjectData } from '@/shared/types/projects';

export const MainProjects = async () => {
  const projectsData: IProjectData = await fetchProjects();
  const title: string = projectsData?.header[0] ? projectsData.header[0] : '';
  const description: string = projectsData?.description[0] ? projectsData.description[0] : '';
  const link: string = projectsData?.link ? projectsData.link : '';
  const imageUrl: string = projectsData?.fileUrl[0] ? projectsData.fileUrl[0] : '';

  if (!imageUrl) return null;
  return <MainProjectsClient title={title} description={description} link={link} imageUrl={imageUrl} />;
};
