import Link from "next/link";
import { mediaArchive } from "@/data/media";
import { MediaCard } from "@/components/MediaCard";

export default function Home(){
  return <main>
    <section className="hero hero-rich">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker"><span>✦</span> DAY STAR MINISTRIES • BASSETT, VIRGINIA</div>
          <h1>You Belong Here.</h1>
          <p className="hero-script">Connect. Grow. Serve.</p>
          <p>At Day Star Ministries, we exist to lead people into a growing relationship with Jesus Christ and to make that light shine in our community.</p>
          <div className="actions">
            <Link className="button" href="/watch">Watch Latest Message</Link>
            <Link className="button secondary" href="/im-new">Plan Your Visit</Link>
          </div>
        </div>
        <div className="hero-verse">“Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.”<strong> — Matthew 5:16</strong></div>
      </div>
    </section>

    <div className="service-strip">
      <div className="container">
        <div><strong>Sunday School</strong><br/>9:00 AM</div>
        <div><strong>Sunday Morning</strong><br/>10:00 AM</div>
        <div><strong>Sunday Evening</strong><br/>6:00 PM</div>
        <div><strong>Wednesday Study</strong><br/>7:00 PM</div>
      </div>
    </div>

    <section className="section pastor-home">
      <div className="container split-feature">
        <div className="portrait-wrap"><img src="/pastor-sammy.jpg" alt="Pastor Sammy Caldwell"/></div>
        <div>
          <div className="eyebrow">From Our Pastor</div>
          <h2>Welcome to Day Star.</h2>
          <p className="lead">Our prayer is that Day Star may be an instrument God uses to connect people to Himself, help us grow in His grace together, and serve the world for His glory.</p>
          <p className="signature">— Pastor Sammy Caldwell</p>
          <div className="actions"><Link className="button" href="/ministries">Explore Our Ministries</Link></div>
        </div>
      </div>
    </section>

    <section className="visit-band">
      <div className="church-photo"><img src="/church.jpg" alt="Day Star Ministries church building in Bassett, Virginia"/></div>
      <div className="visit-copy">
        <div className="eyebrow light">Plan Your Visit</div>
        <h2>Come as you are.</h2>
        <p>We would love to welcome you in person. Day Star Ministries is located at <strong>6387 Virginia Ave, Bassett, VA 24055.</strong></p>
        <div className="actions"><Link className="button light-btn" href="/im-new">What to Expect</Link></div>
      </div>
    </section>

    <section className="section c3-feature">
      <div className="c3-mark">C³</div>
      <div className="container">
        <div className="eyebrow">The Power of Connection, Multiplied</div>
        <h2>Coffee • Conversation • Christ</h2>
        <p className="lead">C³ brings people across generations together for meaningful conversation, shared life, and Christ-centered connection. Coffee is optional. Connection is essential.</p>
        <div className="pathway">
          <div><span>☕</span>Coffee</div><div><span>💬</span>Conversation</div><div><span>✝</span>Christ</div><div><span>♡</span>Community</div><div><span>∞</span>Connection</div>
        </div>
        <div className="actions"><Link className="button" href="/connect">Explore C³</Link><Link className="button secondary" href="/stories">Share Your Story</Link></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="eyebrow">Connect • Grow • Serve</div>
        <h2>One church. Many ways to belong.</h2>
        <div className="grid feature-grid">
          <div className="feature-card"><div className="feature-icon">✦</div><h3>Connect</h3><p>Build real relationships with Christ, with one another, and with our wider community.</p></div>
          <div className="feature-card"><div className="feature-icon">↗</div><h3>Grow</h3><p>Grow through worship, prayer, Scripture, testimony, and conversations that matter.</p></div>
          <div className="feature-card"><div className="feature-icon">♡</div><h3>Serve</h3><p>Discover gifts, notice needs, and turn connection into practical service and care.</p></div>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <div className="eyebrow">Watch & Pray</div>
        <h2>Stay connected throughout the week.</h2>
        <div className="grid two">{mediaArchive.slice(0,2).map(i=><MediaCard key={i.slug} item={i}/>)}</div>
        <div className="actions"><Link className="button" href="/watch">Open Media Archive</Link><Link className="button secondary" href="/prayer">Request Prayer</Link></div>
      </div>
    </section>

    <section className="section outreach-home">
      <div className="container">
        <div className="eyebrow">Outreach in Action</div>
        <h2>See a need. Make a connection. Join a mission.</h2>
        <div className="grid">
          <div className="card accent-card"><div className="pill">Community Care</div><h3>Closet & Pantry</h3><p>Take what you need. Give what you can. No cost. A dignity-first pathway for clothing, pantry support, and connection.</p></div>
          <div className="card accent-card"><div className="pill">Skills & Service</div><h3>Gifts Become Service</h3><p>People can teach, learn, mentor, build, repair, serve, and create practical opportunity together.</p></div>
          <div className="card accent-card"><div className="pill">Day Star Stories</div><h3>Real people. Real stories. A living God.</h3><p>Stories of faith and impact help one connection create another—with review and permission at every step.</p></div>
        </div>
      </div>
    </section>
  </main>
}