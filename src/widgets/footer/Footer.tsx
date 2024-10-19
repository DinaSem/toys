import styles from './Footer.module.scss';
import BelmarLogo from '@/shared/assets/icons/belmarLogo.svg';
import FormaLogo from '@/shared/assets/icons/FormaLogo.svg';
import Link from 'next/link';
import { fetchFooterMenus } from '@/shared/lib/fetches/fetchMenu/fetchFooterMenus';

export const Footer = async () => {
  const footerData = await fetchFooterMenus();

  if (!footerData || footerData === null) {
    return null;
  }

  const footerMenuLeft = footerData?.footerMenuLeft?.menuItems;
  const footerMenuRight = footerData?.footerMenuRight?.menuItems;
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logoMobile}>
              <BelmarLogo />
            </div>
            <div className={styles.logo}>
              <BelmarLogo />
            </div>
            <div className={styles.navigationBlockWrapper}>
              <div className={styles.navigationBlockLeft}>
                {footerMenuLeft?.map(item => (
                  <Link href={item.path} key={item.path}>
                    {item.value}
                  </Link>
                ))}
              </div>
              <div className={styles.navigationBlockRight}>
                {footerMenuRight?.map(item => (
                  <Link href={item.path} key={item.path}>
                    {item.value}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.contactsBlock}>
              <div className={styles.phone}>
                <Link href='tel:+74951651158' passHref legacyBehavior>
                  +7 (495) 165 11 58
                </Link>
              </div>
              <div className={styles.email}>BELMAR@FORMA.RU</div>
              <div className={styles.address}>
                <div>Москва,</div>
                <div>Ленинградское шоссе, 67</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.project}>
            <div>Проект</div>
            <div>девелопера</div>
          </div>
          <div className={styles.logoForma}>
            <FormaLogo />
          </div>
          <div className={styles.bottomLinks}>
            <div>BELMAR © 2024</div>
            <div className={styles.designMiddle}>
              Дизайн <span className={styles.only}>Only.</span>
            </div>
            <div>Разработка KEEP CALM</div>
            <div className={styles.designLast}>
              Дизайн <span className={styles.only}>Only.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
