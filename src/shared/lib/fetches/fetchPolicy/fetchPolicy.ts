import { api, baseUrl } from '@/shared/consts/api';

export async function fetchPolicy() {
  try {
    const res = await fetch(`${baseUrl}${api.rootSimple}${api.urlPolicy}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для  раздела Политика');
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
