import { api, baseUrl } from '@/shared/consts/api';

export async function fetchLifeStyleIconsMain() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlLifestyleIconsMain}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке иконок для Лайфстайл"');
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

export async function fetchLifeStyleSliderMain() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlLifestyleSliderMain}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке слайдов для Лайфстайл"');
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
