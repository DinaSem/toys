import { MainRiverfrontClient } from '@/app/_main-page/riverfront/MainRiverfrontClient';
import { fetchRiverfront } from '@/shared/lib/fetches/fetchRiverfront/fetchRiverfront';
import { IRiverfrontData, IRiverfrontItem } from '@/shared/types/riverfront';

export const MainRiverfront = async () => {
  const data: IRiverfrontData = await fetchRiverfront();
  const riverfrontTitle = data?.name?.[0] || '';
  const item: IRiverfrontItem = data?.items?.[0] || null;

  if (!item) return null;

  return <MainRiverfrontClient title={riverfrontTitle} data={item} />;
};
