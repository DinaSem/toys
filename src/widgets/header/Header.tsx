'use client';

import { Button } from '@/shared/ui/button/Button';
import MenuIcon from '@/shared/assets/icons/menu-icon.svg';
import CloseMenuIcon from '@/shared/assets/icons/close-menu.svg';
import Logo from '@/shared/assets/icons/logo.svg';
import PhoneIcon from '@/shared/assets/icons/phone.svg';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { Menu } from '../menu/Menu';
import styles from './Header.module.scss';
import Lenis from 'lenis';

export const Header = ({ children }: { children: React.ReactNode[] }) => {
  const [visible, setVisible] = useState(true);
  const scrollPosition = useRef<number>(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useLayoutEffect(() => {
    const t1 = gsap.timeline();

    if (!headerRef.current) return;

    t1.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1, ease: 'power3.out', duration: 1.5 });

    return () => {
      t1.kill();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollPosition.current && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      scrollPosition.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id='header'
      className={`${styles.headerWrapper} ${visible ? styles.visible : styles.hidden}`}
      ref={headerRef}
    >
      <div className={styles.header}>
        {/*{menuOpen ? (*/}
        {/*  <Button type='button' variaton='menu' className={styles.menuBtnClose} onClick={toggleMenu}>*/}
        {/*    <div className={styles.closeMenuIcon}>*/}
        {/*      <CloseMenuIcon width={12} height={12} />*/}
        {/*    </div>*/}
        {/*    <span>Закрыть</span>*/}
        {/*  </Button>*/}
        {/*) : (*/}
        {/*  <Button type='button' variaton='menu' transparent className={styles.menuBtn} onClick={toggleMenu}>*/}
        {/*    <div className={styles.menuIcon}>*/}
        {/*      <MenuIcon width={28} height={12} />*/}
        {/*    </div>*/}
        {/*    <span>Меню</span>*/}
        {/*  </Button>*/}
        {/*)}*/}
        <div className={styles.headerContent}>
          <div className={styles.linksWrapper}>
            <ul className={`${styles.menulist} ${menuOpen ? styles.linksHidden : styles.linksVisible}`}>
              {children[0]}
            </ul>
          </div>
          <div className={styles.logo}>
            <Link href='/#photogallery'>
             Галерея
            </Link>
          </div>

          {/*<div className={styles.logo}>*/}
          {/*  <Link href='/'>*/}
          {/*    <Logo />*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <Button  type='button' variaton='menu' transparent className={styles.numberBtn}>
            еще что-то
          </Button>
          <Button
            link='tel:+74951651158'
            type='button'
            variaton='menu'
            transparent
            className={styles.numberBtnAdaptive}
          >
            {/*<div className={styles.phoneWrapper}>*/}
            {/*  <PhoneIcon />*/}
            {/*</div>*/}
          </Button>
        </div>

        <Button type='button' variaton='menu' className={styles.catalogBtn}>
          Оставить заявку
        </Button>
        <Button type='button' variaton='menu' className={styles.catalogBtn}>
          Оставить заявку
        </Button>
      </div>
      <Menu setIsOpen={setMenuOpen} isOpen={menuOpen}>
        {children[1]}
      </Menu>
    </header>
  );
};
