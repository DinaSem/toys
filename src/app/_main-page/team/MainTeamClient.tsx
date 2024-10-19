'use client';
import { useCallback, useState, useEffect } from 'react';
import { ITeamItemDataType } from '@/shared/types/TeamTypes';
import styles from './MainTeam.module.scss';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { Slider } from '@/shared/ui/slider/Slider';
import TeamCard from '@/app/_main-page/team/team-card/TeamCard';
import { baseUrl } from '@/shared/consts/api';
import { BackgroundChangeSection } from '@/shared/ui/background-change-section/BackgroundChangeSection';
import { bgColors } from '@/shared/consts/constants';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';

interface IMainTeamClient {
  teamSlides: ITeamItemDataType[];
  teamCardsNames: string[];
  title: string;
  description: string;
}

const MainTeamClient = ({ teamSlides, teamCardsNames, title, description }: IMainTeamClient) => {
  const [teamCardState, setTeamCardState] = useState<{ [key: string]: boolean }>({});
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 1025);
    };

    window.addEventListener('resize', updateMedia);
    updateMedia();

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const onClickTeamCard = useCallback(
    (_id: string) => {
      if (!isDesktop) {
        setTeamCardState(prevState => ({ ...prevState, [_id]: !prevState[_id] }));
      }
    },
    [isDesktop],
  );

  const onMouseEnterTeamCard = (id: string) => {
    if (isDesktop) {
      setTeamCardState(prevState => ({ ...prevState, [id]: true }));
    }
  };

  const onMouseLeaveTeamCard = (id: string) => {
    if (isDesktop) {
      setTeamCardState(prevState => ({ ...prevState, [id]: false }));
    }
  };

  const teamSlidesWithTitles = teamSlides.map((item, index) => ({
    ...item,
    name: teamCardsNames[index],
  }));

  const slides = teamSlidesWithTitles.map((team, index) => (
    <div
      key={index}
      onMouseEnter={() => onMouseEnterTeamCard(team._id)}
      onMouseLeave={() => onMouseLeaveTeamCard(team._id)}
    >
      <TeamCard
        opened={teamCardState[team._id] || false}
        onClick={() => onClickTeamCard(team._id)}
        description={team.description}
        title={team.title}
        name={team.name}
        logo={`${baseUrl}/static/${team.img}`}
      />
    </div>
  ));

  return (
    <BackgroundChangeSection colorStart={bgColors.colorEnd} colorEnd={bgColors.colorStart} className={styles.section}>
      <div className={styles.infoBlock} id='projectteam'>
        {title && (
          <div className={styles.title}>
            <AnimatedTitle text={title} />
          </div>
        )}
        {description && (
          <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(description) }} />
        )}
      </div>
      {teamSlides?.length > 0 && (
        <div className={styles.gallery}>
          <Slider
            slides={slides}
            color='blue'
            classNameSlide={styles.slider}
            classNameArrows={styles.arrows}
            slidesPerView={isDesktop ? 4 : 'auto'}
            isRecreated={false}
          />
        </div>
      )}
    </BackgroundChangeSection>
  );
};

export default MainTeamClient;
