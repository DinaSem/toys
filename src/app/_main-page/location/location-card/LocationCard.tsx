import clsx from 'clsx';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import OnFootIcon from '@/shared/assets/icons/location-on-foot.svg';
import styles from './LocationCard.module.scss';

interface ILocationCard {
  title: string;
  duration: string;
  className?: string;
}
export const LocationCard = ({ title, duration, className }: ILocationCard) => {
  const [numberDuration, ...textDuration] = duration?.split(' ');
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.descriptions}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(title) }} />
        <div className={styles.duration}>
          <span className={styles.durationNumber}>{numberDuration}</span> {textDuration}
        </div>
      </div>
      <OnFootIcon className={styles.icon} />
    </div>
  );
};
