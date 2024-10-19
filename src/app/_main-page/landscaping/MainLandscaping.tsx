import { MainLandscapingClient } from '@/app/_main-page/landscaping/MainLandscapingClient';
import { MainLandscapingGallery } from '@/app/_main-page/landscaping/MainLandscapingGallery';
import { fetchLandscaping, fetchLandscapingSlider } from '@/shared/lib/fetches/fetchLandscaping/fetchLandscaping';
import { fetchButtons } from '@/shared/lib/fetches/fetchButtons/fetchButtons';
import { IButton, IImageSlide } from '@/shared/types/sliders';

export const MainLandscaping = async () => {
  const landscapingData = await fetchLandscaping();
  const title: string = landscapingData?.title || '';
  const descriptions: { description: string }[] = landscapingData?.descriptions || [];
  const image: string = landscapingData?.absolutePath?.[0] || '';

  const buttonsData = await fetchButtons();
  const landscapingBtn = buttonsData?.menuItems?.find((el: IButton) => el?.description_2 === 'landscaping_button');

  const sliderData = await fetchLandscapingSlider();
  const slides: IImageSlide[] = sliderData?.slide || [];

  return (
    <>
      <MainLandscapingClient title={title} descriptions={descriptions} image={image} btn={landscapingBtn} />
      <MainLandscapingGallery slidesData={slides} />
    </>
  );
};
