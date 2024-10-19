import { MainFlatsClient } from '@/app/_main-page/flats/MainFlatsClient';
import { fetchMainGalleryFlats, fetchMainInfoFlats } from '@/shared/lib/fetches/fetchMainFlats/fetchMainFlats';
import { IMainGalleryTab } from '@/shared/types/mainGallery';
import { fetchButtons } from '@/shared/lib/fetches/fetchButtons/fetchButtons';
import { IButton } from '@/shared/types/sliders';

export const MainFlats = async () => {
  const flatsInfoData = await fetchMainInfoFlats();
  const flatsInfoImg: string = flatsInfoData?.slide[0].image ? flatsInfoData.slide[0].image : '';
  const flatsInfoTitleText: string = flatsInfoData?.slide[0].title.text ? flatsInfoData?.slide[0].title.text : '';
  const flatsInfoTitleDescription: string = flatsInfoData?.slide[0].title.descriptions[0]
    ? flatsInfoData?.slide[0].title.descriptions[0]
    : '';

  const flatsGalleryData = await fetchMainGalleryFlats();
  const flatsGallery: IMainGalleryTab[] = flatsGalleryData ? flatsGalleryData : [];
  const buttonsData = await fetchButtons();
  const btn = buttonsData?.menuItems?.find((el: IButton) => el?.description_2 == 'list_button');

  return (
    <MainFlatsClient
      flatsInfoImg={flatsInfoImg}
      flatsInfoTitleText={flatsInfoTitleText}
      flatsInfoTitleDescription={flatsInfoTitleDescription}
      flatsGallery={flatsGallery}
      btn={btn}
    />
  );
};
