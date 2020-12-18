import Navbar from '../BioNavbar';
import Section from '../Section';
import { React, Component } from 'react';
import dummyText from '../../DummyText';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../../components/Video.css';
class Biography extends Component {
  render() {
    return (
      <div className="Biography">
        <Section
          title="Origins and Life"
          subtitle={
            'Dmitri Shostakovich was born on September 25 1906 and passed away on August 9th 1975. He is remembered as the one the most influenctial composers of the 20th century, having done most if not all of his major works under Communist oppression. This is why people nowadays declare him the greatest Soviet composer. He is renowned for his 15 symphonies, chamber works, and concerti. Born the son of an engineer, he was heavily invested into music from a young age. Having joined the St. Petersburg Conservatory in 1919, and the Chopin International Competitiion for Pianists in Warsaw in 1927. From 1937, Shostakovich became a teacher at the Leningrad Conservatory, where he also composed Symphony No. 7 in 1941. In 1943 he relocated to Moscow.'
          }
          dark={true}
          id="section1"
        />
        <Section
          title="Conflicts with Stalin"
          subtitle={
            "Starting from 1928, Joseph Stalin created his Five-Year Plan, a plan that placed an iron grip on Soviet culture. In 1932, avant-garde and jazz music were officially outlawed. One of the first conflicts with Stalin involved his play titled Lady Macbeth of the Mtensk District in 1936. Stalin approved a newspaper the next day completely condemning the performance, criticizing its non-Soviet like sounds. Shostakovich's second denunciation came during the Cold War. Due to the circumstances, Soviet officials imposed further ideological control. At a certain conference in 1948, Shostakovich and many other leaders in Soviet music were disgraced. Shostakovich lost both his teaching jobs at the Moscow and Leningrad conservatories."
          }
          dark={true}
          id="section2"
        />
        <Section
          title="Early Works"
          subtitle={
            "Shostakovich's first work that gained notable attraction was his first symphony, written from 1924 to 1925. During this time, the Soviet Union was still relatively free in terms of artistic expression. As a result, Shostakovich would experiment with avant-garde trends, an axample being his opera titled The Nose in 1927-1928. After his first controversy with Stalin, his Symphony No. 5 won back the hearts of the Soviet Party officials. Disguised as a classical return to form, the Symphony evokes feelings of anger, fear, and sadness. This is exactly how Shostakovich felt during the height of Stalin's purge's"
          }
          dark={true}
          id="section3"
        />
        <div className="Video">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=L__jruvYuCg&t=12s"
          />
        </div>
        <Section
          title="Later Life"
          subtitle={
            "During the mid-1940, he continued to compose music, including Symphony No. 8 in 1943 and the Violin Concerto No. 1 in 1947. Following his second condemnation, he still continued to compose music. For instance, his Symphony No. 11 written in 1957 earned him the Lenin Prize and the Wihuri Sibelius Prize in 1958. For the rest of Shostakovich's life, he continued to make music, becoming an honorary member of the Accademia Nazionale di Santa Cecilia in Rome. In addition, he earned an honorary doctorate of music at the University Of Oxford. Finally in 1966, he was awarded the Royal Philharmonic Society's Gold Medal."
          }
          dark={true}
          id="section4"
        />
        <Section
          title="How can you take influence from Shostakovich?"
          subtitle={
            "Shostakovich was heavily influenced from his surroundings, take for instance Symphony No. 5. Taken at face value, the piece is a return to Soviet standards, however it displays Shostakovich's feelings of anger and dread towards the central government. Perhaps you can take the feelings that your surroundings evoke and implement them in your music. In addition, Shostakovich's music is characterized by sharp contrasts, grotesque elements and ambivalent tonality"
          }
          dark={true}
          id="section5"
        />
        <Section
          title="Analysis of his Ninth Symphony: A Mockery of Stalin"
          subtitle={
            "One of Dmitri's most sarcastic piece's is suprisingly his ninth Symphony, a piece typically associated with loud and epic experiences, take Beethoven's Ninth for example. If you take a listen, you can notice that the first movement especially, is riddled with jokes and things only composers would get, all in order to mock Stalin. To provide some context, Stalin commissioned Shostakovich to write his highly-anticipated Ninth Symphony for the Victory Parade after WWII. Shostakovich, who was fed up with Stalin's ruthless demands, decided to go along with it, but not in the way Stalin anticipated. In the first movement, titled 'Allegro', Shostakovich jokes around with a trombone line that sounds like 'da daaaaaaa'. You might not understand what I'm talking about, so I recommend you listen to a bit of the symphony."
          }
          dark={true}
          id="section6"
        />
        <div className="Video">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=qynu8yNiTrY&t=268s"
          />
        </div>
      </div>
    );
  }
}

export default Biography;
