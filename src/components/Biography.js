import './App.css';
import Navbar from './components/BioNavbar';
import Section from './components/Section';
import { React, Component } from 'react';
import dummyText from './DummyText';

class Biography extends Component {
  render() {
    return (
      <div className="Biography">
        <Navbar />
        <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default Biography;
