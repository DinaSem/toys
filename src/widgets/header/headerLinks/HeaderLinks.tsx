import { fetchMenu } from '@/shared/lib/fetches/fetchMenu/fetchMenu';
import Link from 'next/link';

interface IHeaderLink {
  value: string;
  description: string;
  path: string;
  hightlight: boolean;
  hide: boolean;
  targetBlank: boolean;
  items: any[];
  id: number;
}

export async function HeaderLinks() {
  const apiData = await fetchMenu('header');
  const menuItems: IHeaderLink[] = apiData?.menuItems ?? [];

  return (
    <>
      {menuItems.map(
        item =>
          !item.hide && (
            <Link href={item.path} key={item.id}>
              {item.value}
            </Link>
          ),
      )}
    </>
  );
}
