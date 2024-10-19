import { api, baseUrl } from '@/shared/consts/api';

export async function fetchRiverfront() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlRiverfront}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для блока "Жизнь с видом на море"');
    }
    if (res?.ok) {
      return res.json();
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
}
