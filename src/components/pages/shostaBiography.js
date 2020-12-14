import Navbar from '../BioNavbar';
import Section from '../Section';
import { React, Component } from 'react';
import dummyText from '../../DummyText';
import { Link } from 'react-router-dom';

class Biography extends Component {
  render() {
    return (
      <div className="Biography">
        <Section
          title="Section 1"
          subtitle={
            'Dmitri Shostakovich was born on September 25 1906 and passed away on August 9th 1975. He is remembered as the one the most influenctial composers of the 20th century, having done most if not all of his major works under Communist oppression. He is renowned for his 15 symphonies, chamber works, and concerti'
          }
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={
            'Born in St Petersburg, he began composing music at a relatively young age. His first symphony written from 1924-1925, acheived worldwide success.'
          }
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={'Around 1928'}
          dark={true}
          id="section3"
        />
        <Section title="Section 4" subtitle={''} dark={false} id="section4" />
        <Section title="Section 5" subtitle={''} dark={true} id="section5" />
      </div>
    );
  }
}

export default Biography;
