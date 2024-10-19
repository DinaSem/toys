import styles from './page.module.scss';
import { MainBelmar } from './_main-page/belmar/MainBelmar';
import { MainAbout } from '@/app/_main-page/about/MainAbout';
import { MainLandscaping } from '@/app/_main-page/landscaping/MainLandscaping';
import { MainFlats } from '@/app/_main-page/flats/MainFlats';
import { MainLocation } from '@/app/_main-page/location/MainLocation';
import { MainArchitecture } from '@/app/_main-page/architecture/MainArchitecture';
import { MainLifestyle } from '@/app/_main-page/lifestyle/MainLifestyle';
import { MainRiverfront } from '@/app/_main-page/riverfront/MainRiverfront';
import { MainTeam } from '@/app/_main-page/team/MainTeam';
import { MainGallery } from '@/app/_main-page/gallery/MainGallery';
import { MainProjects } from '@/app/_main-page/projects/MainProjects';
import { MainContacts } from '@/app/_main-page/contacts/MainContacts';
export default function Home() {
  return (
    <main>
      {/*<MainBelmar />*/}
      {/*<MainAbout />*/}
      {/*<MainLandscaping />*/}
      {/*<MainFlats />*/}
      {/*<MainLocation />*/}
      {/*<MainArchitecture />*/}
      {/*<MainLifestyle />*/}
      {/*<MainRiverfront />*/}
      {/*<MainTeam />*/}
      <MainGallery />
      {/*<MainProjects />*/}
      {/*<MainContacts />*/}
    </main>
  );
}
