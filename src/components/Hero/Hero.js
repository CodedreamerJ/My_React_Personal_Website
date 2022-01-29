import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        James Romero's <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Industrious computer science graduate from Chapman University with a zeal for innovation and a background in the United States Armed Services. 
      Seeking to leverage the skills I learned with a focus on collaboration, communication, and creativity as a programmer. Motivated to learn from 
      senior engineers while sharing innovative ideas in an environment that allows for personal growth.
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;