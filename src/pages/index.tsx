import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
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

export const getServerSideProps = (async () => {
  const [profileLinks, projects] = await Promise.all([getProfileLinks(), getProjects()]);
  return {
    props: { profileLinks, projects },
  };
}) satisfies GetServerSideProps<HomePageProps>

export default function Home({ profileLinks, projects }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Basic title="Azin" description="Welcome to my small corner of the web" headerSlot={<Greeting />}>
      <p>
        I&apos;m a software engineer with a passion for building for the web. I rely on my design background to create beautiful and accessible experiences. Currently I am leading a team of engineers @ FedEx Dataworks.
      </p>
      <h2>🔎 Find me</h2>
      <ProfileLinks profileLinks={profileLinks} />
      <h2>🚧 Some Projects</h2>
      <ProjectList projects={projects} />
    </Basic>
  );
}
