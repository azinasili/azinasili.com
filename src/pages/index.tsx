import React from 'react';
import type { NextPage } from 'next';
import type { Project } from 'types/Project';
import type { ProfileLink } from 'types/ProfileLink';
import Basic from 'layouts/Basic';
import ProjectList from 'components/ProjectList';

interface HomeProps {
  projects: Project[];
  profileLinks: ProfileLink[];
}

const Home: NextPage<HomeProps> = ({ profileLinks, projects }) => (
  <Basic title="Home" description="my home page" profileLinks={profileLinks}>
    <p>
      I&apos;m a front-end developer with a passion for building interfaces. I
      rely heavily on my design background to create beautiful products. Besides
      development I enjoy craft beer and talking tech.
    </p>
    <ProjectList projects={projects} />
  </Basic>
);

Home.getInitialProps = async (): Promise<HomeProps> => {
  const profileResponse = await fetch('http://localhost:3000/api/profile');
  const projectsResponse = await fetch('http://localhost:3000/api/projects');
  const profileLinks = await profileResponse.json();
  const projects = await projectsResponse.json();

  return { profileLinks, projects };
};

export default Home;
