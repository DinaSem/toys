import { api, baseUrl } from '@/shared/consts/api';

export async function fetchMainInfoFlats() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlFlatsInfo}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке инфо-данных для раздела Квартиры');
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

export async function fetchMainGalleryFlats() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlFlatsGallery}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для галереи раздела Квартиры');
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

export async function fetchLocationInfo() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}${api.root}${api.urlLocationInfo}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке инфо данных расположения');
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
