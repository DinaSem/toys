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

  const footerMenuLeft = {
    _id: "66dee55ff5e180caf14dd770",
    name: "footer_left",
    __v: 0,
    menuItems: [
      {
        highlight: false,
        hide: false,
        targetBlank: false,
        items: [],
        value: "о проекте",
        path: "/#about",
        id: 1
      },
      {
        highlight: false,
        hide: false,
        targetBlank: false,
        items: [],
        value: "расположение",
        path: "/#location",
        id: 2
      },
    ]}
  const footerMenuRight = footerData?.footerMenuRight?.menuItems || null;
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            {/*<div className={styles.logoMobile}>*/}
            {/*  <BelmarLogo />*/}
            {/*</div>*/}
            {/*<div className={styles.logo}>*/}
            {/*  <BelmarLogo />*/}
            {/*</div>*/}
            <div className={styles.navigationBlockWrapper}>
              {/*<div className={styles.navigationBlockLeft}>*/}
              {/*  {footerMenuLeft.menuItems?.map(item => (*/}
              {/*    <Link href={item.path} key={item.path}>*/}
              {/*      {item.value}*/}
              {/*    </Link>*/}
              {/*  ))}*/}
              {/*</div>*/}
              {/*<div className={styles.navigationBlockRight}>*/}
              {/*  {footerMenuRight?.map(item => (*/}
              {/*    <Link href={item.path} key={item.path}>*/}
              {/*      {item.value}*/}
              {/*    </Link>*/}
              {/*  ))}*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.contactsBlock}>
              {/*<div className={styles.phone}>*/}
              {/*  <Link href='tel:+74951651158' passHref legacyBehavior>*/}
              {/*    +7 (495) 165 11 58*/}
              {/*  </Link>*/}
              {/*</div>*/}
              {/*<div className={styles.email}>BELMAR@FORMA.RU</div>*/}
              {/*<div className={styles.address}>*/}

              {/*</div>*/}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.project}>
            <div>Разработка сайта</div>
            <div>Семенова Дина</div>
          </div>
          {/*<div className={styles.logoForma}>*/}
          {/*  <FormaLogo />*/}
          {/*</div>*/}
          <div className={styles.bottomLinks}>
            {/*<div>BELMAR © 2024</div>*/}
            {/*<div className={styles.designMiddle}>*/}
            {/*  Дизайн <span className={styles.only}>Only.</span>*/}
            {/*</div>*/}
            {/*<div>Разработка Семенова Дина</div>*/}
            {/*<div className={styles.designLast}>*/}
            {/*  Дизайн <span className={styles.only}>Only.</span>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};
