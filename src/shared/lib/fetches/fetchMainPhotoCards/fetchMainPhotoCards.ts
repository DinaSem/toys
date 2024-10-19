import { api, baseUrl } from '@/shared/consts/api';

export async function fetchMainPhotoCards() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlPhotoCards}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      return null;
    }
    if (res?.ok) {
      return res.json();
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return null;
    }
  }
}
