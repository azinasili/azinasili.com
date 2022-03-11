import React from 'react';
import NextLink from 'next/link';
import type { Project } from 'types/Project';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
}): React.ReactElement => {
  const highlightList = (
    highlights: Project['highlights'],
  ): React.ReactElement[] =>
    highlights.map(highlight => (
      <React.Fragment key={highlights.indexOf(highlight)}>
        <li className="highlight-item">{highlight}</li>
        <style jsx>
          {`
            .highlight-item {
              display: inline-block;
            }

            .highlight-item:not(:last-child) {
              margin-right: 1.25em;
            }
          `}
        </style>
      </React.Fragment>
    ));

  const projectLinks = projects.map(
    ({ id, url, name, description, highlights }) => {
      return (
        <React.Fragment key={id}>
          <li>
            <NextLink href={url}>
              <a>
                <h2>{name}</h2>
                <p>{description}</p>
                <ul className="highlight-items">{highlightList(highlights)}</ul>
              </a>
            </NextLink>
          </li>
          <style jsx>
            {`
              .highlight-items {
                font-size: 0.875em;
                list-style: none;
                padding-left: 0;
              }
            `}
          </style>
        </React.Fragment>
      );
    },
  );

  return (
    <>
      <ul className="projects">{projectLinks}</ul>
      <style jsx>
        {`
          .projects {
            list-style: none;
            padding-left: 0;
          }
        `}
      </style>
    </>
  );
};

export default ProjectList;
