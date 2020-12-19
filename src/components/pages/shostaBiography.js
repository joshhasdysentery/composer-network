import Section from '../Section';
import { React, Component } from 'react';
import ReactPlayer from 'react-player';
import '../../components/Video.css';
import workcamp from '../../components/workcamp.jpg';
import petersburg from '../../components/petersburg.jpg';
import soviet from '../../components/soviet.jpg';
class Biography extends Component {
  render() {
    return (
      <div className="Biography">
        <Section
          title="Origins"
          subtitle={
            'Dmitri Shostakovich was born on September 25, 1906, in St. Petersburg. He is known as the one the most influenctial composers of the 20th century, having composed most of his works under Communist oppression. This is why people nowadays declare him the greatest Soviet composer. He is renowned for his 15 symphonies, chamber works, and concerti. Born the son of an engineer, he was heavily invested into music from a young age. From the young age of nine after receiving piano lessons from his mother, he was noticed to have incredible musical prowess. At age 13, he joined the St. Petersburg Conservatory in 1919, where he studied piano under many influential musicians at the time. At the age of 19, he wrote his infamous First Symphony, attracting the attention of Mikhail Tukhachevsky, who allowed Shostakovich to find work in Moscow.'
          }
          dark={true}
          id="section1"
        />
        <div className="Video">
          <img src={petersburg} />
        </div>
        <Section
          title="Early Works"
          subtitle={
            "Shostakovich's first work that gained notable attraction was his First symphony, written from 1924 to 1925. During this time, the Soviet Union was still relatively free in terms of artistic expression. So composers such as Stravinsky, were still allowed to perform their works. Quick fact, Shostakovich was influenced by many Russian composers during this time, particularly Stravinsky. Shostakovich would experiment with avant-garde trends, an example being his opera titled The Nose in 1927-1928. For much of his early career, due to the cultural restrictions put in place by the Soviet party, he had to work around them. Back then, every piece of music or play had to be included with an official justification. Shostakovich would often write these justifications at first glance, in support of the Soviet party. However, as one continues to analyze the work he created, he usually gave the West the cooler segments. His justifications can be defined as a desperate workaround to a bold musical experiment. After his first controversy with Stalin, his Symphony No. 5 won back the hearts of the Soviet Party officials. The official justification for the symphony read, 'A Soviet artist's creative response to justified criticism.' Disguised as a return to simplicity, the Symphony evokes feelings of anger, fear, and sadness. This is exactly how Shostakovich felt during the height of Stalin's purge's. The Fifth was a triumph for both the party and the public, satisfying the aesthetic needs of the Soviet party, whilst also being seen as an expression of rage and sadness by the public. (Disclaimer: Turn your volume down when playing the video, it can start at random times)"
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
          title="Conflicts with Stalin"
          subtitle={
            "Starting from 1928, Joseph Stalin created his Five-Year Plan, a plan that placed an iron grip on Soviet culture. In 1932, avant-garde and jazz music were officially outlawed, and any other art form that came from the West. Furthermore in that year, the Soviet Union announced their official art style, called 'socialist realism.' The purpose of this goal was mainly to promote the agenda of the party, providing uplifting messages, but also being understandable by the common person. This caused many composers to riddle their work with patriotism, in order to gain good will from the party. Even worse, new pieces of work now required official approval. This law crippled the creativity of composers, forcing simplicity on their music. Failure to obey this rule would result in a ban, and if you still didn't listen, an even worse fate. An example of this was Vesvolod Meyerhold, a theatre director and close friend of Shostakovich. He was tortured and killed in 1940. One of the first conflicts with Stalin involved his play titled Lady Macbeth of the Mtensk District in 1936. Stalin was in attendance during the play, and stormed out mid performance. A couple days later, a newspaper (most likely approved by Stalin himself) titled 'Muddle Instead Of Music' completely condemned the performance, criticizing its non-Soviet like sounds. After this condemnation, many of Shostakovich's friends distanced themselves from him, and his commissions dropped significantly. This is an occurance seen many times throughout his life, having his life threatened by party officials for attempting something out of the ordinary. After the fiasco with his Ninth Symphony in 1945 (see below for an analysis on that), Joseph Stalin took that symphony as an insult to him. So in 1948, he and two other composers attended a conference where their names were dragged through the mud. Soon after that, he was fired from both his teaching positions. Tensions eased after Stalin's death in 1953."
          }
          dark={true}
          id="section2"
        />
        <div className="Video">
          <img src={workcamp} />
        </div>
        <Section
          title="Later Life"
          subtitle={
            "During the 1940's, he continued to compose music, notably Symphony No. 7 written in 1942 and the Violin Concerto No. 1 in 1947. The Seventh Symphony was written in defiance of the Nazi siege of Leningrad, and had vastly different reactions from the public and the party, much like his Fifth. For the party, the symphony was propaganda gold, so much so that the Nazi's attempting to stop its Leningrad premiere. The public was favourable to this symphony as well, but detected an underlying message woven inside. Shostakovich stated that in his Seventh and Fifth symphonies, he was really criticizing totalitarianism, and Joseph Stalin in particular. Following his second condemnation, he still continued to compose music, but his outlook on life became much more depressing. Some of the For instance, his Eight Quartet contained many references to his past greatest works. Some even speculated that Shostakovich was preparing to kill himself during this time. During the last fifteen years of his life, his music became drenched in his fear of death and pessimism. Upon his death, he was hailed by Soviet media as a good Communist, someone who helped public life. However by Western media, they were confused on how to describe him. On one side he was hailed as a terrific composer, but also being labelled someone who was sympathetic to Communist party (which we all know by now is not true)."
          }
          dark={true}
          id="section4"
        />
        <div className="Video">
          <img src={soviet} />
        </div>
        <Section
          title="How can you take influence from Shostakovich?"
          subtitle={
            "Shostakovich was heavily influenced from his surroundings, take for instance Symphony No. 5. Taken at face value, the piece is a return to Soviet standards, however it displays Shostakovich's feelings of anger and dread towards the central government. Perhaps you can take the feelings that your surroundings evoke and implement them in your music. In addition, Shostakovich's music is characterized by sharp contrasts, grotesque elements and ambivalent tonality. I'm not saying to directly copy his style, but take a listen to how these elements add to the overall experience of the piece."
          }
          dark={true}
          id="section5"
        />
        <Section
          title="Analysis of his Ninth Symphony: A Mockery of Stalin"
          subtitle={
            "One of Dmitri's most sarcastic piece's is suprisingly his ninth Symphony, a piece typically associated with loud and epic climaxes, take Beethoven or Bruckner's Ninth's for example. If you take a listen, you can notice that the first movement especially, is riddled with jokes and things only composers would get, all in order to mock Stalin. To provide some context, the year was 1945 and Germany has just been defeated in WWII. Stalin still happy with the Seventh Symphony, commissioned Shostakovich to write his highly-anticipated Ninth Symphony for the Victory Parade. He wanted the symphony to be a massive celebration. Shostakovich, who was fed up with Stalin's ruthless demands, decided to go along with it, but not in the way Stalin anticipated. The symphony is drenched in sarcasm and disobediance. In the first movement, Shostakovich jokes around with a trombone line that sounds like 'da daaaaaaa'. You might not understand what I'm talking about, so I recommend you listen to a bit of the symphony. Essentially, the trombone line acts like a trampoline preparing for an epic climax, but what actually plays is a cartoonish little tune. This sort of build-up occurs often in the movement. There's one part in the movement, where this exact trombone line misses the cue four times before hitting the note on time, seeming to openly tease the Soviet-faithfuls in the audience. Even more, the piece is written in Eb major, which was commonly thought of as the most 'heroic' key. All in all, Shostakovich's shenanigans in this piece showed how he really thought about the government, like a circus. (Disclaimer: Turn your volume down when playing the video, it can start at random times)"
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
