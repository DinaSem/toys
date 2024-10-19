import { fetchMainGallery, fetchMainGalleryMobile } from '@/shared/lib/fetches/fetchGallery/fetchGallery';
import { MainGalleryClient } from './MainGalleryClient';
import { IMainGalleryTab } from '@/shared/types/mainGallery';

export const MainGallery = async () => {
  const galleryData: IMainGalleryTab[] = (await fetchMainGallery()) || [];
  const galleryMobileData: IMainGalleryTab[] = (await fetchMainGalleryMobile()) || [];

  return <MainGalleryClient data={galleryData} mobileData={galleryMobileData} />;
};
