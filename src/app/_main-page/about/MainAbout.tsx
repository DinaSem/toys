import { fetchMainAboutData } from '@/shared/lib/fetches/fetchMenu/fetchMainAboutData';
import { MainAboutClient } from '@/app/_main-page/about/MainAboutClient';

export const MainAbout = async () => {
  const aboutData = await fetchMainAboutData();

  const text = aboutData ? aboutData[0]?.title?.text : undefined;
  const descriptions = aboutData ? aboutData[0]?.title?.descriptions : undefined;

  if (!aboutData) {
    return null;
  }

  return <MainAboutClient text={text} descriptions={descriptions} />;
};
