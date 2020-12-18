import React from 'react';
import Section from '../Section';

function About() {
  return (
    <Section
      title="Our Company"
      subtitle={
        'Composer Network is dedicated to provide inspiration and resources for aspiring and professional composers. Our company is dedicated to provide quality resources and inspiration for aspiring composers, as well as well-established ones. As of now, Composer Network is still massively in the works, but stay tuned for future updates!'
      }
      dark={true}
      id="aboutsection"
    />
  );
}

export default About;
