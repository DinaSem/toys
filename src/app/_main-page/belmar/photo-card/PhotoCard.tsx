import Image from 'next/image';
import styles from '../MainBelmar.module.scss';
import { IPhotoCard } from '@/shared/types/mainBelmar';
import Link from 'next/link';

interface PhotoCardProps {
  card: IPhotoCard;
}

export const PhotoCard = ({ card }: PhotoCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={card.title?.text || '#'}>
        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={card.image}
            alt={card.title?.text || 'photo card'}
            width={240}
            height={277}
          />
        </div>
        <p className={styles.cardDescription}>{card.title?.descriptions}</p>
      </Link>
    </div>
  );
};
