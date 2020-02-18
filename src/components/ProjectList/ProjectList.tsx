import React from 'react';
import Link from 'next/link';
import { Project, Projects } from '../../types/project';

interface ProjectListProps {
  projects: Projects;
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
    ({ _id, url, name, description, highlights }) => (
      <React.Fragment key={_id}>
        <li>
          <Link href={url}>
            <a>
              <h2>{name}</h2>
              <p>{description}</p>
              <ul className="highlight-items">{highlightList(highlights)}</ul>
            </a>
          </Link>
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
    ),
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

export default React.memo(ProjectList);
