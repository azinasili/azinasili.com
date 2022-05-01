import React from 'react';
import type { NextPage } from 'next';
import type { Project } from 'types/Project';
import type { ProfileLink } from 'types/Profile';
import Basic from 'layouts/Basic';
import ProjectList from 'components/ProjectList';
import getProjects from 'server/service/projects/get';
import getProfileLinks from 'server/service/profile/get';

interface HomePageProps {
  projects: Project[];
  profileLinks: ProfileLink[];
}

const Home: NextPage<HomePageProps> = ({ profileLinks, projects }) => (
  <Basic title="Home" description="my home page" profileLinks={profileLinks}>
    <p>
      I&apos;m a software engineer with a passion for building for the web. I
      rely heavily on my design background to create beautiful experiences. Besides
      development I enjoy craft beer and talking tech.
    </p>
    {process.env.NODE_ENV !== 'production' && <ProjectList projects={projects} />}
  </Basic>
);

Home.getInitialProps = async (): Promise<HomePageProps> => {
  const profileLinks = await getProfileLinks();
  const projects = await getProjects();
  return { profileLinks, projects };
};

export default Home;
