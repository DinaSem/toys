'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './AnimatedImage.module.scss';

interface ResponsiveImageProps {
  mobileSrc?: string;
  tabletSrc?: string;
  src: string;
  alt?: string;
  sizes?: string;
  objectFit?: 'contain' | 'cover';
  className?: string;
  blockRef?: { current: HTMLElement | null };
  onClick?: () => void;
}

export const AnimatedImage = ({
  mobileSrc,
  tabletSrc,
  src,
  alt = '',
  sizes,
  objectFit = 'cover',
  className,
  blockRef,
  onClick,
}: ResponsiveImageProps) => {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const triggerElement = blockRef || imageRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (triggerElement.current) {
      observer.observe(triggerElement.current);
    }

    return () => {
      if (triggerElement.current) {
        observer.unobserve(triggerElement.current);
      }
    };
  }, [triggerElement]);

  return (
    <>
      {src && (
        <div ref={imageRef} className={clsx(className, styles.imageContainer)} onClick={onClick}>
          <picture>
            <source media='(max-width: 540px)' srcSet={mobileSrc || src} />
            <source media='(max-width: 1024px)' srcSet={tabletSrc || src} />
            <Image
              src={src}
              alt={alt}
              fill={true}
              sizes={sizes}
              style={{ objectFit: objectFit }}
              className={clsx(styles.image, isInView && styles.inViewport)}
            />
          </picture>
        </div>
      )}
    </>
  );
};
