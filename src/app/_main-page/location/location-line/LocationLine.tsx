import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import styles from './LocationLine.module.scss';

interface ILocationLine {
  title: string;
  duration: string;
  className?: string;
}
export const LocationLine = ({ title, duration, className }: ILocationLine) => {
  const [numberDuration, ...textDuration] = duration?.split(' ');
  return (
    <div className={styles.line}>
      <span className={styles.title} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(title) }} />{' '}
      <span className={styles.durationNumber}>{numberDuration}</span>{' '}
      <span className={styles.durationText}>{textDuration}</span>
    </div>
  );
};
