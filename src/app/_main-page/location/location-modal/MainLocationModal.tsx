import clsx from 'clsx';
import Image from 'next/image';
import Modal from 'react-modal';
import { CloseButton } from '@/shared/ui/close-button/CloseButton';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import ByCarIcon from '@/shared/assets/icons/location-by-car.svg';
import { LocationCard } from '../location-card/LocationCard';
import { ILocationModal } from '../MainLocation';
import styles from './MainLocationModal.module.scss';
import { LocationLine } from '@/app/_main-page/location/location-line/LocationLine';

interface MainLocationClientProps {
  isOpen: boolean;
  closeModal: () => void;
  locationModal: ILocationModal;
}
const Titles = ({ className, title, description }: { className: string; title: string; description: string }) => {
  return (
    <div className={clsx(styles.titles, className)}>
      {title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(title || '') }} />}
      {description && (
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(description || '') }} />
      )}
    </div>
  );
};
export const MainLocationModal = ({ isOpen, closeModal, locationModal }: MainLocationClientProps) => {
  Modal.setAppElement('main');

  const slidesOnFoot = locationModal?.slides?.filter(el => el.title?.text === 'пешком')?.slice(0, 4);
  const slidesByCar = locationModal?.slides?.filter(el => el.title?.text === 'на машине')?.slice(0, 6);
  const middleIndexByCar = Math.ceil(slidesByCar?.length / 2 || 0);
  const slidesByCarFirst = middleIndexByCar ? slidesByCar?.slice(0, middleIndexByCar) : [];
  const slidesByCarSecond = middleIndexByCar ? slidesByCar?.slice(middleIndexByCar) : [];
  const slidesByCarToRender = [slidesByCarFirst, slidesByCarSecond].filter(slides => slides.length > 0);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal} overlayClassName={styles.overlay}>
      <CloseButton className={styles.closeButton} onClick={closeModal} />
      <div className={styles.content} data-lenis-prevent={true}>
        <Titles className={styles.titlesTablet} title={locationModal?.title} description={locationModal?.description} />
        <div className={styles.map}>
          <Image src={locationModal?.map} alt='расположение на карте' fill style={{ objectFit: 'cover' }} />
          <div className={styles.blurred}></div>
        </div>
        <div className={styles.info}>
          <Titles
            className={styles.titlesDekstop}
            title={locationModal?.title}
            description={locationModal?.description}
          />
          <div className={styles.slides}>
            {slidesOnFoot?.length > 0 && (
              <div className={styles.slidesOnFoot}>
                {slidesOnFoot.map((slide, index) => (
                  <LocationCard
                    title={slide.title?.descriptions?.[1] || ''}
                    duration={slide.title?.descriptions?.[0] || ''}
                    className={styles.slideOnFoot}
                    key={index}
                  />
                ))}
              </div>
            )}
            {slidesByCar?.length > 0 && (
              <div className={styles.slidesByCar}>
                {slidesByCarToRender?.length > 0 && (
                  <>
                    {slidesByCarToRender.map((slidesGroup, index) => (
                      <div key={index} className={styles.columnByCar}>
                        <ByCarIcon className={clsx(styles.iconByCar, index > 0 && styles.iconByCarNotFirst)} />
                        {slidesGroup.map((slide, index) => (
                          <LocationLine
                            key={index}
                            title={slide.title?.descriptions?.[1] || ''}
                            duration={slide.title?.descriptions?.[0] || ''}
                          />
                        ))}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
