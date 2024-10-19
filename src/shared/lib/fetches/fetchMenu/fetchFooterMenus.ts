import { api, baseUrl } from '@/shared/consts/api';
import { IFooterData } from '@/shared/types/menu';

export async function fetchFooterMenus(): Promise<IFooterData> {
  try {
    const [leftRes, rightRes] = await Promise.all([
      fetch(`${baseUrl}${api.root}${api.urlMenu}${api.urlFooterMenuLeft}`, {
        next: { revalidate: api.revalidationSeconds },
      }),
      fetch(`${baseUrl}${api.root}${api.urlMenu}${api.urlFooterMenuRight}`, {
        next: { revalidate: api.revalidationSeconds },
      }),
    ]);

    if (!leftRes.ok || !rightRes.ok) {
      return { footerMenuLeft: null, footerMenuRight: null };
    }

    const footerMenuLeft = await leftRes.json();
    const footerMenuRight = await rightRes.json();

    return { footerMenuLeft, footerMenuRight };
  } catch (error: unknown) {
    console.error(error);
    return { footerMenuLeft: null, footerMenuRight: null };
  }
}
