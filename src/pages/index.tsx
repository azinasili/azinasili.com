import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import type { Project } from 'types/Project';
import type { ProfileLink } from 'types/Profile';
import Basic from 'layouts/Basic';
import ProjectList from 'components/ProjectList';
import getProjects from 'server/getProjects';
import getProfileLinks from 'server/getProfileLinks';

interface HomePageProps {
  projects: Project[];
  profileLinks: ProfileLink[];
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const profileLinks = await getProfileLinks();
  const projects = await getProjects();
  return {
    props: { profileLinks, projects },
  };
}

const Home: NextPage<HomePageProps> = ({ profileLinks, projects }) => (
  <Basic title="Home" description="my home page" profileLinks={profileLinks}>
    <p>
      I&apos;m a software engineer with a passion for building for the web. I
      rely heavily on my design background to create beautiful experiences. Besides
      development, I enjoy craft beer and talking tech.
    </p>
    {process.env.NODE_ENV !== 'production' && <ProjectList projects={projects} />}
  </Basic>
);

export default Home;
