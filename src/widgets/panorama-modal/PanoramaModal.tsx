'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import clsx from 'clsx';
import { CloseButton } from '@/shared/ui/close-button/CloseButton';
import { useLockBodyScroll } from '@/shared/lib/useLockBodyScroll/useLockBodyScroll';
import Image from 'next/image';
import SwipeIcon from '@/shared/assets/icons/swipe-icon.svg';
import { useDevice } from '@/shared/lib/useMobile/useMobile';
import DOMPurify from 'dompurify';
import styles from './PanoramaModal.module.scss';

gsap.registerPlugin(Draggable);

interface PanoramaModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export const PanoramaModal: React.FC<PanoramaModalProps> = ({ isOpen, onClose, imageUrl }) => {
  useLockBodyScroll(isOpen);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const modalImageRef = useRef<HTMLDivElement | null>(null);
  const panoramaWrapperRef = useRef<HTMLDivElement | null>(null);
  const overlayText = 'Для перемещения <br/>по&nbsp;инфраструктуре листайте вбок';

  const { isTablet, isMobile } = useDevice();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    if (isOpen && modalImageRef.current && panoramaWrapperRef.current) {
      Draggable.get(modalImageRef.current)?.kill();

      Draggable.create(modalImageRef.current, {
        type: 'x',
        edgeResistance: 0.95,
        bounds: panoramaWrapperRef.current,
        inertia: true,
      });
    }
  }, [isOpen]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

  if (!isOpen) return null;

  return (
    <div className={clsx(styles.overlayPanorama, { [styles.hidden]: !isOpen })} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <CloseButton className={styles.closeButton} onClick={onClose} />
        <div
          className={styles.panoramaWrapper}
          ref={panoramaWrapperRef}
          onClick={handleOverlayClick}
          onMouseDown={handleOverlayClick}
          onTouchStart={handleOverlayClick}
        >
          {showOverlay && (isMobile || isTablet) && (
            <div className={styles.overlayContent}>
              <p className={styles.overlayText} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(overlayText) }} />
              <div className={styles.swipeIcon}>
                <SwipeIcon />
              </div>
            </div>
          )}
          <div className={`${styles.draggableImage} ${isImageLoaded ? styles.visible : ''}`} ref={modalImageRef}>
            <Image
              src={imageUrl}
              alt='Panorama'
              fill
              sizes='100vw'
              style={{ objectFit: 'cover' }}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
