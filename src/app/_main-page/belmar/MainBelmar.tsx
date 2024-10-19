import { MainBelmarClient } from './MainBelmarClient';
import { fetchMainPhotoCards } from '@/shared/lib/fetches/fetchMainPhotoCards/fetchMainPhotoCards';
import { IPhotoCard } from '@/shared/types/mainBelmar';

export const MainBelmar = async () => {
  const cardsData = await fetchMainPhotoCards();
  const cardsInfo: IPhotoCard[] = cardsData?.slide ? cardsData.slide : [];

  return <MainBelmarClient cards={cardsInfo} />;
};
