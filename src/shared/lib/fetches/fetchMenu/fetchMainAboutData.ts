import { api, baseUrl } from '@/shared/consts/api';
import { ISlide } from '@/shared/types/aboutTypes';

export async function fetchMainAboutData(): Promise<ISlide[] | null> {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlAboutMain}`, {
      next: { revalidate: api.revalidationSeconds },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data.slide || null;
  } catch (error: unknown) {
    return null;
  }
}
