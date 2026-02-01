import type { InferGetStaticPropsType, GetStaticPropsResult } from 'next';
import type { Project } from 'types/Project';
import type { ProfileLink } from 'types/Profile';
import { getProjects } from 'server/getProjects';
import { getProfileLinks } from 'server/getProfileLinks';
import { Basic } from 'layouts/Basic';
import { Greeting } from 'components/Greeting';
import { ProfileLinks } from 'components/ProfileLinks';
import { ProjectList } from 'components/ProjectList';

interface HomePageProps {
  projects: Project[];
  profileLinks: ProfileLink[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const [profileLinks, projects] = await Promise.all([getProfileLinks(), getProjects()]);
  return {
    props: { profileLinks, projects },
  };
}

export default function Home({ profileLinks, projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Basic title="Azin" description="Welcome to my small corner of the web" headerSlot={<Greeting />}>
      <p>
        I&apos;m a software engineer with a passion for the web. I can help you create beautiful and accessible
        experiences. Currently I am leading a team of engineers @ FedEx Dataworks.
      </p>
      <h2 className="h6">🔎 Find me</h2>
      <ProfileLinks profileLinks={profileLinks} />
      <h2 className="h6">🚧 Some Projects</h2>
      <ProjectList projects={projects} />
    </Basic>
  );
}
