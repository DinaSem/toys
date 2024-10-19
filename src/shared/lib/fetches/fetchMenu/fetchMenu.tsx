import { api, baseUrl } from '@/shared/consts/api';

export async function fetchMenu(slug: string) {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlMenu}/${slug}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      return null;
    }
    if (res?.ok) {
      return res.json();
    }
  } catch (error: unknown) {
    return null;
  }
}

export async function fetchMenuCard() {
  try {
    const res = await fetch(`${baseUrl}${api.root}${api.urlMenuCard}`, {
      next: { revalidate: api.revalidationSeconds },
    });
    if (!res?.ok) {
      return null;
    }
    if (res?.ok) {
      return res.json();
    }
  } catch (error: unknown) {
    return null;
  }
}
