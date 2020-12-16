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
          title="Origins"
          subtitle={
            'Dmitri Shostakovich was born on September 25 1906 and passed away on August 9th 1975. He is remembered as the one the most influenctial composers of the 20th century, having done most if not all of his major works under Communist oppression. He is renowned for his 15 symphonies, chamber works, and concerti'
          }
          dark={true}
          id="section1"
        />
        <Section
          title="His Many Controversies"
          subtitle={
            'Born in St Petersburg, he began composing music at a relatively young age. His first symphony written from 1924-1925, acheived worldwide success.'
          }
          dark={true}
          id="section2"
        />
        <Section
          title="His Greatest Works"
          subtitle={'Around 1928'}
          dark={true}
          id="section3"
        />
        <Section
          title="Why was he so Influential?"
          subtitle={''}
          dark={true}
          id="section4"
        />
        <Section
          title="Notable Works"
          subtitle={''}
          dark={true}
          id="section4"
        />
      </div>
    );
  }
}

export default Biography;
