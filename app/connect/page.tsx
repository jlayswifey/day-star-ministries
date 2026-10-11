import Link from "next/link";
import { site } from "@/lib/site";

const ways = [
  {symbol:"☕",title:"Join a conversation",body:"Meet someone from a different generation or background. Share a cup, a story, or simply a moment of attention."},
  {symbol:"♡",title:"Offer your gifts",body:"Bring an idea, a practical skill, encouragement, transportation support, or a willingness to listen."},
  {symbol:"✦",title:"Make a connection",body:"Help a neighbor feel seen. Invite someone who may not otherwise have a place at the table."},
];
const roadmap = [
  {title:"Conversation Cards",body:"Gentle prompts for sharing stories, faith, wisdom, and everyday life."},
  {title:"Facilitator Guide",body:"A repeatable approach for welcoming participants and helping meaningful conversations grow."},
  {title:"Stories of Connection",body:"Participant-approved testimonies about friendship, belonging, and service."},
  {title:"Start a C³ Circle",body:"Future tools for communities that want to begin a local circle of their own."},
];
export default function Connect(){
  return <main>
    <section className="page-hero page-hero-c3 c3-expanded-hero">
      <div className="container">
        <div className="eyebrow light">C³ · The Power of Connection, Multiplied</div>
        <h1>Coffee • Conversation • Christ</h1>
        <p>Building meaningful intergenerational friendships through fellowship. A place to be heard, to belong, and to discover how even one connection can become a blessing to many.</p>
        <div className="actions"><a className="button" href="#participate">Find Your Place</a><a className="button secondary" href="#our-story">Discover the Vision</a></div>
        <p className="c3-hero-mantra">Coffee optional. Connection essential.</p>
      </div>
    </section>
    <section className="section c3-feature" id="our-story">
      <div className="container c3-split">
        <div>
          <div className="eyebrow">The Heart of C³</div><h2>A conversation can change a life.</h2>
          <p className="lead">There is wisdom in every generation, value in every story, and room at the table for people who are new, returning, curious, or simply looking for someone to talk to.</p>
          <p>C³ is a Christ-centered invitation to slow down, listen deeply, build intergenerational friendship, and turn compassion into practical acts of service. You do not have to be a church member to explore a connection.</p>
          <div className="pathway"><div><span>☕</span>Coffee</div><div><span>💬</span>Conversation</div><div><span>✝</span>Christ</div><div><span>♡</span>Community</div><div><span>∞</span>Connection</div></div>
        </div>
        <div className="c3-visual c3-radiance" role="img" aria-label="Symbolic starburst and cross representing faith and connection">
          <div className="c3-light-cross">✝</div><div className="c3-cup">C³</div><p>One connection creates another.<br/>One conversation creates another.<br/>One act of service creates another.</p>
        </div>
      </div>
    </section>
    <section className="section" id="participate"><div className="container">
      <div className="eyebrow">There Is Room for You</div><h2>Find your place in the circle.</h2>
      <p className="lead">You can receive connection and offer something in return. Both are meaningful ways to participate.</p>
      <div className="grid">{ways.map(item=><article className="feature-card" key={item.title}><div className="feature-icon">{item.symbol}</div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      <div className="cta-band"><div><span>FIRST C³ PILOT</span><h3>A small beginning with room to grow.</h3><p>Our early goal is a welcoming circle of approximately two to five pairs, built thoughtfully and with care.</p></div><div className="actions"><a className="button" href={site.forms.c3} target="_blank" rel="noreferrer">Express Interest</a><a className="button secondary" href={site.phoneHref}>Call Day Star</a></div></div>
    </div></section>
    <section className="section alt"><div className="container">
      <div className="eyebrow">Your Voice Matters</div><h2>What could you bring to the table?</h2>
      <p className="lead">A memory. A question. A skill. A listening ear. A story that might help someone else feel less alone.</p>
      <div className="grid"><div className="card"><h3>For younger neighbors</h3><p>Find encouragement, practical wisdom, and a sense of belonging through relationships across generations.</p></div><div className="card"><h3>For older neighbors</h3><p>Share life experience, stories, skills, and faith while building new friendships.</p></div><div className="card"><h3>For helpers and mentors</h3><p>Offer time, gifts, resources, and steady presence to help connections become community care.</p></div></div>
      <div className="actions"><Link className="button" href="/stories">Share Your Story</Link><Link className="button secondary" href="/community-care">Discover Community Care</Link></div>
    </div></section>
    <section className="section"><div className="container">
      <div className="eyebrow">Coming Soon · C³ Resource Library</div><h2>Tools that help connection multiply.</h2>
      <div className="grid two">{roadmap.map(item=><article className="feature-card" key={item.title}><span className="pill">In development</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      <p className="muted">These resources are planned, not currently available for download. Updates will be posted as each resource is ready.</p>
    </div></section>
    <section className="section c3-feature"><div className="container">
      <div className="eyebrow">Faith in Action</div><h2>Connection is not limited to a building.</h2>
      <p className="lead">Our starting home is Day Star Ministries in Bassett, Virginia. The vision reaches beyond a Sunday service: into neighborhoods, family stories, shared experiences, and everyday kindness.</p>
      <p>Participation is voluntary. Stories and photographs will only be shared publicly with permission. The C³ project is in a pilot-development phase; available activities and opportunities will be confirmed before launch.</p>
      <div className="actions"><Link className="button" href="/im-new">Visit Day Star</Link><Link className="button secondary" href="/prayer">Request Prayer</Link></div>
    </div></section>
  </main>;
}