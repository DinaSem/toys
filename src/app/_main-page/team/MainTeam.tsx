import { fetchMainATeamInfo, fetchMainATeamSlider } from '@/shared/lib/fetches/fetchMainTeamData/fetchMainTeamData';
import { ITeamDataType, ITeamInfoType, ITeamItemDataType } from '@/shared/types/TeamTypes';
import MainTeamClient from '@/app/_main-page/team/MainTeamClient';

export async function MainTeam() {
  const teamData: ITeamDataType = await fetchMainATeamSlider();

  const teamSlides: ITeamItemDataType[] = teamData ? teamData.items : [];
  const teamCardsNames: string[] = teamData ? teamData.name : [];

  const teamInfo: ITeamInfoType = await fetchMainATeamInfo();
  const title: string = teamInfo ? teamInfo.title : '';
  const description: string = teamInfo ? teamInfo.content : '';

  if (!teamData) {
    return null;
  }

  return (
    <MainTeamClient teamCardsNames={teamCardsNames} teamSlides={teamSlides} title={title} description={description} />
  );
}
