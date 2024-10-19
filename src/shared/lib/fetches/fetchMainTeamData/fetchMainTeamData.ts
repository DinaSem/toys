import { api, baseUrl } from '@/shared/consts/api';

export async function fetchMainATeamInfo() {
  try {
    const res = await fetch(`${baseUrl}${api.rootSimple}${api.urlTeamInfoMain}`, {
      next: { revalidate: api.revalidationSeconds },
    });

    if (!res?.ok) {
      throw new Error('Ошибка в загрузке информации для Команды проекта"');
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
export async function fetchMainATeamSlider() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlTeamSliderMain}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке иконок для Команды проекта"');
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
