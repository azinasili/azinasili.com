import React from 'react';

interface ExperienceProps {
  institution: string;
  description: string;
  endYear: string;
  startYear: string;
}

const Experience: React.FC<ExperienceProps> = ({ institution, description, endYear, startYear }) => {
  return (
    <>
      <p>{startYear} - {endYear}</p>
      <h3>{institution}</h3>
      <p>{description}</p>
    </>
  )
};

export default Experience;
