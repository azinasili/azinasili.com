import React from 'react';

interface ExperienceGroupProps {
  children: React.ReactNode;
}

const ExperienceGroup: React.FC<ExperienceGroupProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default React.memo(ExperienceGroup);
