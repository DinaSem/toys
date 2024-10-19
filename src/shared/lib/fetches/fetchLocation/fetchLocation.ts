import { api, baseUrl } from '@/shared/consts/api';

export async function fetchLocationOnFoot() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlLocationOnFoot}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для слайдера "пешком" раздела Расположение');
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

export async function fetchLocationByCar() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlLocationByCar}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке данных для слайдера "на машине" раздела Расположение');
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
    const res = await fetch(`${baseUrl}${api.root}${api.urlLocationInfo}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке инфо данных раздела Расположение');
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

export async function fetchLocationModal() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlLocationModal}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      throw new Error('Ошибка в загрузке инфо данных для модального окна раздела Расположение');
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
