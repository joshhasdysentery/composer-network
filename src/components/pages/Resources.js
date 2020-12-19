import React from 'react';
import Section from '../Section';

function Resources() {
  return (
    <div className="Resources">
      <Section
        title="Youtube"
        subtitle={
          'Youtube Channels: Adam Neely, 12tone, Rick Beato, David Bruce Composer'
        }
        dark={true}
        id="aboutsection"
      />
      <Section
        title="Books"
        subtitle={
          'Principles of Orchestration by Rimsky-Korsakov, The Study of Orchestration by Samuel Adler, Music Composition for Dummies'
        }
        dark={true}
        id=""
      />
    </div>
  );
}

export default Resources;
