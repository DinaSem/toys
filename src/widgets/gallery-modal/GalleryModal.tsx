import Modal from 'react-modal';
import styles from './GalleryModal.module.scss';
import { CloseButton } from '@/shared/ui/close-button/CloseButton';
import clsx from 'clsx';
import { useLockBodyScroll } from '@/shared/lib/useLockBodyScroll/useLockBodyScroll';
import { Slider } from '@/shared/ui/slider/Slider';
import Image from 'next/image';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  slidesData: string[];
  selectedSlideIndex: number;
  setSelectedSlideIndex: (index: number) => void;
  className?: string;
  overlayClassName?: string;
}

export const GalleryModal = ({
  isOpen,
  onClose,
  slidesData,
  selectedSlideIndex,
  setSelectedSlideIndex,
  className,
  overlayClassName,
}: GalleryModalProps) => {
  useLockBodyScroll(isOpen);

  const slidesModal = slidesData.map((slide, index) => (
    <div key={index}>
      <div className={styles.image}>
        <Image
          src={slide}
          alt={`slide-${index}`}
          fill={true}
          sizes={isOpen ? '100vw' : '40vw'}
          style={{
            objectFit: isOpen ? 'contain' : 'cover',
          }}
        />
      </div>
    </div>
  ));

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={clsx(styles.modal, className)}
      overlayClassName={clsx(styles.overlay, overlayClassName)}
      contentElement={(props, children) => <div {...props}>{children}</div>}
      ariaHideApp={false}
    >
      <div className={styles.modalContent}>
        <CloseButton className={styles.closeButton} onClick={onClose} />
        <Slider
          slides={slidesModal}
          selectedSlideIndex={selectedSlideIndex}
          classNameSlide={styles.modalSlide}
          classNameArrows={styles.modalArrows}
          onSlideChange={index => setSelectedSlideIndex(index)}
        />
        <p className={styles.slidesCount}>{`${selectedSlideIndex + 1}/${slidesModal.length}`}</p>
      </div>
    </Modal>
  );
};
