import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import type { Project } from 'types/Project';
import type { ProfileLink } from 'types/Profile';
import getProjects from 'server/getProjects';
import getProfileLinks from 'server/getProfileLinks';
import Footer from 'components/Footer';
import ProfileLinks from 'components/ProfileLinks';

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
  <>
    <header>
      <h1>Hi</h1>
    </header>
    <main>
      <p>
        I&apos;m a software engineer with a passion for building for the web. I
        rely heavily on my design background to create beautiful experiences. Besides
        development, I enjoy craft beer and talking tech.
      </p>
      <h2>Find me</h2>
      <ProfileLinks profileLinks={profileLinks} />
      <h2>Some Projects</h2>
      <p>...</p>
    </main>
    <Footer />
  </>
);

export default Home;
