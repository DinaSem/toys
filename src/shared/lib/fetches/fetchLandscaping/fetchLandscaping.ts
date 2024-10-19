import { api, baseUrl } from '@/shared/consts/api';

export async function fetchLandscaping() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlLandscaping}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для раздела Благоустройство');
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

export async function fetchLandscapingSlider() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlLandscapingSlider}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для слайдера раздела Благоустройство');
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
