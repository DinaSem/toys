import { api, baseUrl } from '@/shared/consts/api';

export async function fetchProjects() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlProjects}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для  раздела Другие проекты Forma');
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
