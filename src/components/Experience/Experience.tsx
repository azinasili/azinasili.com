import React from 'react';

interface ExperienceProps {
  institution: string;
  description: string;
  endYear: string;
  startYear: string;
}

export function Experience({ institution, description, endYear, startYear }: ExperienceProps) {
  return (
    <React.Fragment>
      <p>{startYear} - {endYear}</p>
      <h3>{institution}</h3>
      <p>{description}</p>
    </React.Fragment>
  );
}
