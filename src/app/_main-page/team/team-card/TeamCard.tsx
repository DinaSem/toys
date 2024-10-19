import type React from 'react';
import { useRef } from 'react';
import styles from './TeamCard.module.scss';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import OpenCloseIcon from '../../../../shared/assets/icons/teamCloseOpen.svg';

interface ITeamCard {
  description: string;
  logo: string;
  name: string;
  title: string;
  opened: boolean;
  onClick: () => void;
}

const TeamCard: React.FC<ITeamCard> = ({ description, logo, name, title, opened, onClick }) => {
  const refElem = useRef<HTMLDivElement | null>(null);
  return (
    <div onClick={onClick} ref={refElem} className={`${styles.card} ${opened && styles.opened}`}>
      <div className={`${styles.cardContent} ${opened && styles.cardContentOpened}`}>
        {!opened && (
          <div className={styles.cardImage}>
            <div className={styles.logo}>
              <Image src={logo} alt={'logo'} fill objectFit={'cover'} />
            </div>
          </div>
        )}
        {opened && (
          <div>
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
          </div>
        )}
        <div className={styles.cardContentBottom}>
          <OpenCloseIcon className={`${styles.iconOpen} ${opened && styles.iconClose}`} />
          <div className={styles.name} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(name) }} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
