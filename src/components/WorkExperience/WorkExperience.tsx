import React from 'react';

interface WorkExperienceProps {
  company: string;
  description: string;
  endYear: string;
  startYear: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ company }) => {
  return (
    <>
      <p>{startYear} - {endYear}</p>
      <h3>{company}</h3>
      <p>{description}</p>
    </>
  )
};

export default WorkExperience;
