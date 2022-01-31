import React from 'react';
import { DiCodeBadge, DiFirebase, DiJavascript, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies during my studies in college. I spent a great deal of time outside of college, learning and working
      on personal projects in web development from front-end to back-end. While in college, I made an emphasis to learn both Andriod and IOS. Nevertheless,
      as I continue to grow in my career, my love for Computer Science and will to learn, I do not see any barriers that will hinder the many more technologies I will learn.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C++ C# Java JavaScript HTML Python 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
