import { fetchMenu, fetchMenuCard } from '@/shared/lib/fetches/fetchMenu/fetchMenu';
import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '@/shared/consts/api';
import styles from './MenuItems.module.scss';

interface IHeaderLink {
  hightlight: boolean;
  hide: boolean;
  targetBlank: boolean;
  items: any[];
  value: string;
  path: string;
  id: number;
}

interface IMenuCard {
  _id: string;
  header: string[];
  fileUrl: string[];
  link: string;
  description: string[];
  slug: string;
}

export async function MenuItems() {
  const menuLeft = await fetchMenu('menu_left');
  const menuRight = await fetchMenu('menu_right');
  const menuLeftItems: IHeaderLink[] = menuLeft?.menuItems ?? [];
  const menuRightItems: IHeaderLink[] = menuRight?.menuItems ?? [];
  const menuCard: IMenuCard = (await fetchMenuCard()) || null;

  return (
    <div className={styles.menuLinksAndCard}>
      <div className={styles.menuLinks}>
        <ul className={styles.menuBlocks}>
          {menuLeftItems.map(item => (
            <li key={item.id}>
              <Link href={item.path}>{item.value}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles.menuPages}>
          {menuRightItems.map(item => (
            <li key={item.id}>
              <Link href={item.path}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </div>
      {menuCard?.fileUrl?.length && (
        <Link href={menuCard.link}>
          <div className={styles.menuCard}>
            <div className={styles.menuCardImg}>
              <Image fill src={`${baseUrl}/static/${menuCard.fileUrl?.[0]}`} alt={menuCard.slug || 'menu card'} />
            </div>
            {menuCard?.header?.length && <div className={styles.menuCardName}>{menuCard.header?.[0]}</div>}
            {menuCard?.description?.length && <p>{menuCard.description?.[0]}</p>}
          </div>
        </Link>
      )}
    </div>
  );
}
