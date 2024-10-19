import { IButton, IPromoCard } from '@/shared/types/sliders';
import { fetchButtons } from '@/shared/lib/fetches/fetchButtons/fetchButtons';
import { fetchArchitecture } from '@/shared/lib/fetches/fetchArchitecture/fetchArchitecture';
import { MainArchitectureClient } from '@/app/_main-page/architecture/MainArchitectureClient';

export const MainArchitecture = async () => {
  const architectureData = await fetchArchitecture();
  const title: string = architectureData?.name?.[0] || '';
  const slides: IPromoCard[] = architectureData?.items || [];

  const buttonsData = await fetchButtons();
  const architectureBtn = buttonsData?.menuItems?.find((el: IButton) => el?.description_2 === 'architecture_button');

  return <>{architectureData && <MainArchitectureClient title={title} slides={slides} btn={architectureBtn} />}</>;
};
