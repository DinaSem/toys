import { IImageSlide, IPromoCard } from '@/shared/types/sliders';
import { fetchLifeStyleIconsMain, fetchLifeStyleSliderMain } from '@/shared/lib/fetches/fetchLifeStyle/fetchLifeStyle';

import { IDescription, IMainLifestyleIcons } from '@/shared/types/lifeStyleTypes';
import { MainLifestyleClient } from '@/app/_main-page/lifestyle/MainLifestyleClient';

export const MainLifestyle = async () => {
  const lifeStyleIconsData: IMainLifestyleIcons = await fetchLifeStyleIconsMain();
  const lifeStyleIcons: IImageSlide[] = lifeStyleIconsData?.slide ? lifeStyleIconsData.slide : [];
  const lifeStyleDescriptions: IDescription[] = lifeStyleIconsData?.descriptions ? lifeStyleIconsData.descriptions : [];

  const lifeStyleSliderData = await fetchLifeStyleSliderMain();
  const lifeStyleSlides: IPromoCard[] = lifeStyleSliderData?.items ? lifeStyleSliderData.items : [];

  return (
    <MainLifestyleClient
      lifeStyleIcons={lifeStyleIcons}
      lifeStyleSlides={lifeStyleSlides}
      lifeStyleDescriptions={lifeStyleDescriptions}
    />
  );
};
