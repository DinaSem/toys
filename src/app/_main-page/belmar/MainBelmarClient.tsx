'use client';
import { useLayoutEffect, useRef } from 'react';
import styles from './MainBelmar.module.scss';
import gsap from 'gsap';
import { IPhotoCard } from '@/shared/types/mainBelmar';
import { PhotoCard } from './photo-card/PhotoCard';
import BelmarTitle from '@/shared/assets/icons/BelmarTitle.svg';
import TitleBall from '@/shared/assets/icons/TitleBall.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface MainBelmarClientProps {
  cards: IPhotoCard[];
}

export const MainBelmarClient = ({ cards }: MainBelmarClientProps) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const TextRevealAnimation = ({ lines }: { lines: string[] }) => {
    const textsRef = useRef<(HTMLElement | null)[]>([]);

    useLayoutEffect(() => {
      const t1 = gsap.timeline();
      if (!textsRef.current) return;

      t1.fromTo(
        textsRef.current,
        { y: 300, skewY: -20, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          ease: 'power4.out',
          delay: 1,
          duration: 2,
          skewY: 0,
        },
      );

      return () => {
        t1.kill();
      };
    }, []);

    return (
      <div className={styles.container}>
        {lines.map((line, index) => (
          <div className={styles.line} key={line}>
            <span
              ref={el => {
                textsRef.current[index] = el;
              }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>
    );
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();

    if (!titleRef.current) return;

    t1.fromTo(
      titleRef.current,
      { y: 800, skewY: 30, opacity: 0 },
      { opacity: 1, y: 0, ease: 'power3.out', duration: 2.5, skewY: 0 },
    );
    if (cardsRef.current) {
      t1.fromTo(
        cardsRef.current,
        { y: 600, visibility: 'hidden' },
        { y: 0, visibility: 'visible', duration: 2.5, ease: 'power3.out' },
        '<',
      );
    }
    t1.fromTo(ballRef.current, { opacity: 0 }, { opacity: 1 });

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 500,
          scale: 1.3,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power4.out',
          duration: 3,
          scale: 1.1,
        },
      );
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center center',
            end: 'bottom 20%',
            scrub: true,
          },
        },
      );
    }

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <>
      <section className={styles.belmarContainer} ref={sectionRef} id='main'>
        <div className={styles.content}>
          <div className={styles.bgImageWrapper}>
            <div className={styles.bgImage} ref={imageRef}></div>
          </div>
          <div className={styles.belmarTitle}>
            <div className={styles.logoWrapper} ref={titleRef}>
              <h1 className={styles.soon}>Скоро</h1>

              {/*<div ref={ballRef} className={styles.logoBall}>*/}
              {/*  <TitleBall />*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={styles.textAndCards}>
            <div className={styles.descriptionDesktop}>
              <TextRevealAnimation lines={['Праздник', 'к нам приходит']} />
            </div>
            <div className={styles.descriptionMobile}>
              <TextRevealAnimation lines={['Праздник', 'к нам приходит']} />
            </div>
            {cards?.length > 0 && (
              <div ref={cardsRef} className={styles.photoCards}>
                {cards.map(
                  (card, index) => card.image && card.title?.descriptions && <PhotoCard key={index} card={card} />,
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      {/*{cards?.length > 0 && (*/}
      {/*  <div className={styles.photoCardsMobile}>*/}
      {/*    {cards.map((card, index) => card.image && card.title?.descriptions && <PhotoCard key={index} card={card} />)}*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
};
