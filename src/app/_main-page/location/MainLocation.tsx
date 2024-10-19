import {
  fetchLocationByCar,
  fetchLocationInfo,
  fetchLocationOnFoot,
  fetchLocationModal,
} from '@/shared/lib/fetches/fetchLocation/fetchLocation';
import { MainLocationClient } from '@/app/_main-page/location/MainLocationClient';
import { IImageSlide } from '@/shared/types/sliders';

export interface ILocationModal {
  title: string;
  description: string;
  map: string;
  slides: IImageSlide[];
}

export const MainLocation = async () => {
  const locationInfoData = await fetchLocationInfo();
  const title = locationInfoData?.title || '';
  const description = locationInfoData?.descriptions?.[0]?.description || '';
  const onFootData = await fetchLocationOnFoot();
  const onFootSlides: IImageSlide[] = onFootData?.slide ? onFootData.slide : [];
  const onFootSliderName = onFootData?.descriptions?.title || '';
  const byCarData = await fetchLocationByCar();
  const byCarSlides: IImageSlide[] = byCarData?.slide ? byCarData.slide : [];
  const byCarSliderName = byCarData?.descriptions?.title || '';

  const locationModalData = await fetchLocationModal();
  const locationModal: ILocationModal = {
    title: locationModalData?.title || '',
    description: locationModalData?.descriptions?.[0]?.description || '',
    map: locationModalData?.absolutePath?.[0] || '',
    slides: locationModalData?.slide || [],
  };

  return (
    <>
      {locationInfoData && (
        <MainLocationClient
          title={title}
          description={description}
          onFootSlides={onFootSlides}
          onFootSliderName={onFootSliderName}
          byCarSlides={byCarSlides}
          byCarSliderName={byCarSliderName}
          locationModal={locationModal}
        />
      )}
    </>
  );
};
