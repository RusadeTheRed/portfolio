import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        I'm Randell <br />
        and I Hate Computers
      </SectionTitle>
      <SectionText>
        So I've made it my mission to get more confortable around PC's and web applications on my journey to a new carrer as a Web Developer
      </SectionText>
      {/* <Button onclick={() => window.location = ''}>A Button</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;