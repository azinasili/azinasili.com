import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import Basic from '../layouts/Basic';
import ProjectList from '../components/ProjectList';
import { Projects } from '../types/project';
import { SocialLinks } from '../types/socialLink';

interface HomeProps {
  projects: Projects;
  socialLinks: SocialLinks;
}

const Home: NextPage<HomeProps> = ({ socialLinks, projects }) => (
  <Basic title="Home" description="my home page" socialLinks={socialLinks}>
    <p>
      I&apos;m a front-end developer with a passion for building interfaces. I
      rely heavily on my design background to create beautiful products. Besides
      development I enjoy craft beer and talking tech.
    </p>
    <ProjectList projects={projects} />
  </Basic>
);

Home.getInitialProps = async (): Promise<HomeProps> => {
  const socialLinksResponse = await fetch(
    'http://localhost:3000/api/socialLinks',
  );
  const projectsResponse = await fetch('http://localhost:3000/api/projects');
  const socialLinks = await socialLinksResponse.json();
  const projects = await projectsResponse.json();

  return { socialLinks, projects };
};

export default Home;
