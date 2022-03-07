import React from 'react';
import type { NextPage } from 'next';
import WorkExperience from '../src/components/WorkExperience/WorkExperience';

const ResumePage: NextPage = () => (
  <section>
    <h1>Links</h1>
    <ul>
      <li>Github</li>
      <li>Codepen</li>
      <li>Linkedin</li>
      <li>...</li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Next</li>
      <li>...</li>
    </ul>
    <h2>Experience</h2>
    <WorkExperience
      company="ShopRunner"
      description="..."
      endYear="Present"
      startYear="2017"
    />
    <WorkExperience
      company="Graphite GTC"
      description="..."
      endYear="2017"
      startYear="2013"
    />
    <WorkExperience
      company="GSW"
      description="..."
      endYear="2013"
      startYear="2013"
    />
    <WorkExperience
      company="AG Marketing Company"
      description="..."
      endYear="2013"
      startYear="2011"
    />
    <h2>Education</h2>
    <WorkExperience
      company="Drexel University"
      description="..."
      endYear="2011"
      startYear="2007"
    />
  </section>
);

export default ResumePage;
