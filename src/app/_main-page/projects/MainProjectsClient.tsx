'use client';
import styles from './MainProjects.module.scss';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { Button } from '@/shared/ui/button/Button';
import { baseUrl } from '@/shared/consts/api';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';

interface IMainProjectsClient {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const MainProjectsClient = ({ title, description, link, imageUrl }: IMainProjectsClient) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.firstBlock}>
          <div className={styles.title}>
            <AnimatedTitle text={title} />
          </div>
          <div className={styles.description}>{description}</div>
          <Button type='button' link={link} className={styles.btn} openInNewWindow={true}>
            все проекты
          </Button>
        </div>
        <div className={styles.secondBlock}>
          <AnimatedImage
            src={`${baseUrl}/static/${imageUrl}` || ``}
            alt='Другие проекты Forma'
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default MainProjectsClient;
