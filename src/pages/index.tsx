import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import type { Project } from 'types/Project';
import type { ProfileLink } from 'types/Profile';
import getProjects from 'server/getProjects';
import getProfileLinks from 'server/getProfileLinks';
import Basic from 'layouts/Basic';
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

const Header: React.FC = () => <h1>👋 Hi</h1>;

const Home: NextPage<HomePageProps> = ({ profileLinks, projects }) => (
  <Basic title="foo" description="bar" headerSlot={<Header />}>
    <p>
      I&apos;m a software engineer with a passion for building for the web. I rely heavily on my design background to create beautiful experiences. Currently I am a <a href="https://www.shoprunner.com/" rel="noreferrer noopener">lead engineer at ShopRunner</a>. Besides development, I enjoy craft beer and talking tech.
    </p>
    <h2>🔎 Find me</h2>
    <ProfileLinks profileLinks={profileLinks} />
    <h2>🚧 Some Projects</h2>
    <p>...</p>
  </Basic>
);

export default Home;
