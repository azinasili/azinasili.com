import type { NextPage } from 'next';
import { Experience } from 'components/Experience';
import { ExperienceGroup } from 'components/ExperienceGroup';

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
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>React</li>
      <li>Next.js</li>
      <li>Kotlin</li>
      <li>Python</li>
      <li>Sass</li>
      <li>CSS</li>
      <li>Figma</li>
      <li>Sketch</li>
      <li>Adobe Suite</li>
    </ul>
    <h2>Experience</h2>
    <ExperienceGroup>
      <Experience
        description="..."
        endYear="Present"
        institution="ShopRunner"
        startYear="2017"
      />
      <Experience
        description="..."
        endYear="Present"
        institution="ShopRunner"
        startYear="2017"
      />
      <Experience
        description="..."
        endYear="Present"
        institution="ShopRunner"
        startYear="2017"
      />
    </ExperienceGroup>
    <Experience
      description="..."
      endYear="2017"
      institution="Graphite GTC"
      startYear="2013"
    />
    <Experience
      description="..."
      endYear="2013"
      institution="GSW"
      startYear="2013"
    />
    <Experience
      description="..."
      endYear="2013"
      institution="AG Marketing Company"
      startYear="2011"
    />
    <h2>Education</h2>
    <Experience
      description="..."
      endYear="2011"
      institution="Drexel University"
      startYear="2007"
    />
  </section>
);

export default ResumePage;
