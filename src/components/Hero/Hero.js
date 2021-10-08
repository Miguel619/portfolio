import React, { Component } from 'react';
import ReactRoundedImage from "react-rounded-image";


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello I'm <br />
          
          <div style={{ display: "flex", marginLeft: "0%" }}>

            <ReactRoundedImage image={"/images/me.jpg"} roundedSize="1" imageWidth="150" imageHeight="150" />
          </div>
          Miguel Mellado
        </SectionTitle>
        <SectionText>
        This website is to showcase my projects and so you can learn more about my technical knowledge and experience.
        Please feel free to reach out to me with any questions.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/miguelmellado619/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;