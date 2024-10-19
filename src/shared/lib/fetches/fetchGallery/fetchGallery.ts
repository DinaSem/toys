import { api, baseUrl } from '@/shared/consts/api';

export async function fetchMainGallery() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlMainGallery}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      return [];
    }
    if (res?.ok) {
      return res.json();
    }
  } catch (error: unknown) {
    return [];
  }
}

export async function fetchMainGalleryMobile() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlMainGalleryMobile}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      return [];
    }
    if (res?.ok) {
      return res.json();
    }
  } catch (error: unknown) {
    return [];
  }
}
